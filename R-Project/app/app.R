# Load packages for app ----
library(shiny)
library(shinyWidgets)
library(shinydashboard)
library(shinycssloaders)
library(tidyverse)
library(leaflet)
library(googlesheets4)
library(reactable)

# Load data globally for the app to consume ----
## Make googlesheets4 skip authentification, since we're using a public sheet
sheets_deauth()

## Create a function that reads the data from Google.
## For now, a roundabout approach. Streamline in future.
## See detail here: https://www.andrewheiss.com/blog/2020/01/01/flexdashboard-dynamic-data/
load_remote_data <- function() {
  read_sheet(
    ss = "1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0",
    sheet = "resources",
    col_types = "??????cnn???????ccnnnnnnnn"
  )
}

remote_data <- load_remote_data()

# Define UI for application ----
ui <- navbarPage(
  title = "COVID Community Resources",
  fluid = TRUE,
  windowTitle = "COVID Resources",
  collapsible = TRUE,

  header = list(
    tags$head(HTML('<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">')),
    tags$head(HTML("<style>* {font-size: 100%; font-family: Roboto, sans-serif;}</style>"))
  ),

  tabPanel(
    title = "Home",

    fluidPage(
      useShinydashboard(),

      fluidRow(
        column(
          width = 3,
          selectInput("language", "Choose your language",
            choices = c("English", "Español", "Française", "中文／Chinese", "日本語/ Japanese", "عربي/ Arabic", "한국어/ Korean", "Karen")
          ),

          selectInput("resource", "What do you need?",
            choices = c(
              "Meals" = "meal", "Groceries" = "grocery",
              "Pharmacy" = "pharmacy", "Childcare for medical workers" = "childcare"
            )
          ),

          selectInput(
            inputId = "day", label = "What days do you need this resource?",
            selectize = TRUE, multiple = TRUE,
            choices = c(
              "Monday" = "mon", "Tuesday" = "tues", "Wednesday" = "wed",
              "Thursday" = "thr", "Friday" = "fri",
              "Saturday" = "sat", "Sunday" = "sun"
            )
          ),

          checkboxGroupInput("cost", "Resource type",
            choices = c("Free resources" = "free", "Paid resources" = "paid")
          ),

          checkboxGroupInput("access", "Access",
            choices = c("Pick-up", "Drive-up", "Delivery")
          ),


          checkboxGroupInput("time", "Times available",
            choices = c("Morning", "Afternoon", "Evening", "24 hour")
          ),

          # radioButtons("bus", "Show bus routes?", #Bus routes might be too much for now
          # choices = c("on", "off"))

          hr(),

          # Automating this workflow
          helpText(sprintf("Last updated: %s", format(Sys.time(), "%b %d, %Y at %I:%M %p")))
        ),
        
        column(width = 1),

        column(
          width = 7,
          fluidRow(
            valueBoxOutput("meal_count", width = 6),
            valueBoxOutput("curb_count", width = 6)
          ),

        fluidRow(
          valueBoxOutput("senior_count", width = 6),
          valueBoxOutput("discount_count", width = 6)
        ),
        
        tags$hr(),
        fluidRow(leafletOutput("map")), 
        tags$hr(),
        fluidRow(reactableOutput("table")),
      ),
      column(width = 1)
    )
  )
)
)

# Define server logic ----
server <- function(input, output, session) {
  
  output$meal_count <- renderValueBox({
    num_free_meals <- count(filter(
      remote_data,
      resource == "meal" & free == 1 & status == "active"
    ))

    valueBox(
      value = num_free_meals,
      subtitle = "Free Meal Locations",
      icon = icon("utensils"), # icon from https://fontawesome.com/icons/utensils?style=solid
      color = "light-blue" # https://rstudio.github.io/shinydashboard/appearance.html#statuses-and-colors
    )
  })

  output$curb_count <- renderValueBox({
    num_curbside <- count(filter(
      remote_data,
      resource == "meal" & free == 0 & status == "active" & access_type == "drive-up"
    ))

    valueBox(
      value = num_curbside,
      subtitle = "Curbside Pickup Count",
      icon = icon("car"), # icon from https://fontawesome.com/icons/car?style=solid
      color = "green" # https://rstudio.github.io/shinydashboard/appearance.html#statuses-and-colors
    )
  })
  
  output$senior_count <- renderValueBox({
    num_senior <- count(filter(remote_data,
                               status == "active" & access_type == "senior shopping hours"))
    
    valueBox(
      value = num_senior,
      subtitle = "Senior Shopping Hours",
      icon = icon("history"), #icon from https://fontawesome.com/icons/history?style=solid
      color = "light-blue" #https://rstudio.github.io/shinydashboard/appearance.html#statuses-and-colors
    )
  })
  
  output$discount_count <- renderValueBox({
    num_discount <- count(filter(remote_data,
                                 status == "active" & access_type == "medical worker discount"))
    
    valueBox(
      value = num_discount,
      subtitle = "Medical Worker Discounts",
      icon = icon("user-md"), #icon from https://fontawesome.com/icons/user-md?style=solid
      color = "green" #https://rstudio.github.io/shinydashboard/appearance.html#statuses-and-colors
    )
  })
  
  output$map <- renderLeaflet({
    map_dat <- remote_data %>%
      filter(is.na(lat) != TRUE)
    
    leaflet(width = "80%") %>%
      addTiles(urlTemplate = "https://api.maptiler.com/maps/streets/{z}/{x}/{y}@2x.png?key=TxvhrAmR6qR1BMLNZjOj",
               attribution = htmltools::HTML("<a href='https://www.maptiler.com/copyright/' target='_blank'>© MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>© OpenStreetMap contributors</a>"),
               group = "Detailed Streets") %>%
      addTiles(urlTemplate = "https://api.maptiler.com/maps/positron/256/{z}/{x}/{y}@2x.png?key=TxvhrAmR6qR1BMLNZjOj",
               attribution = htmltools::HTML("<a href='https://www.maptiler.com/copyright/' target='_blank'>© MapTiler</a> <a href='https://www.openstreetmap.org/copyright' target='_blank'>© OpenStreetMap contributors</a>"),
               group = "Positron") %>%
      addMarkers(lng=map_dat$lon, lat=map_dat$lat, popup=map_dat$details_1) %>%
      addLayersControl(baseGroups = c("Detailed Streets",
                                      "Positron"))
  })
  
  output$table <- renderReactable({
    include_in_table <- select(remote_data, provider, address, city, state, zip, details_1, details_2)
    
    reactable(include_in_table)
  })
  
}

# Run the application
shinyApp(ui = ui, server = server)
