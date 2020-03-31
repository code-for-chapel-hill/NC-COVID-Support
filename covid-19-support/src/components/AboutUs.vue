<template>
  <b-modal id="about-us" centered scrollable>
    <template v-slot:modal-title>
      {{ $t('about.title') }}
    </template>
    <b-card no-body>
      <b-tabs card>
        <b-tab :title="$t('about.partners')">
          <p>{{ $t('about.info') }}</p>
          <ul>
            <li>
              <a href="https://www.orangecountync.gov/1710/Visitors-Bureau" target="_blank">{{ $t('about.orgs.bureau') }}</a>
            </li>
            <li>
              <a href="http://www.downtownchapelhill.com/" target="_blank">{{ $t('about.orgs.partnership') }}</a>
            </li>
            <li>
              <a href="https://locallistnc.com/" target="_blank">{{ $t('about.orgs.localistnc') }}</a>
            </li>
            <li>
              <a href="https://www.carolinafarmstewards.org/on-farm-pickups/" target="_blank">{{ $t('about.orgs.farmstewards') }}</a>
            </li>
          </ul>
        </b-tab>

        <b-tab :title="$t('about.getinvolved')">
          <p>{{ $t('about.devhelp.info') }}</p>
          <ol>
            <li>{{ $t('about.devhelp.step1') }}</li>
            <li>{{ $t('about.devhelp.step2') }}</li>
            <li>{{ $t('about.devhelp.step3') }}</li>
          </ol>
          <p>{{ $t('about.devhelp.dupsite') }}</p>
          <i18n path="about.devhelp.devnote" tag="p">
            <a href="https://github.com/code-for-chapel-hill/COVID-Support-For-CH" target="_blank">{{ $t('about.devhelp.source') }}</a>
            <a href="https://github.com/codeforamerica/codeofconduct" target="_blank">{{ $t('about.devhelp.conduct') }}</a>
          </i18n>
        </b-tab>

        <b-tab :title="$t('about.contact')">
          <i18n path="about.contactus.info" tag="p">
            <a href="https://www.meetup.com/Triangle-Code-for-America/" target="_blank">{{ $t('about.orgs.chb') }}</a>
            <a href="https://www.codeforamerica.org/" target="_blank">{{ $t('about.orgs.cfa') }}</a>
            <a href="mailto:codeforchapelhill@gmail.com" target="_blank">{{ $t('label.email_lowercase') }}</a>
          </i18n>
        </b-tab>
      </b-tabs>
    </b-card>
    <template v-slot:modal-footer>
      <b-button @click="$bvModal.hide('about-us')" right>{{ $t('label.close') }}</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: 'about-us-modal'
}
</script>

<style>
#about-us {
  z-index: 15000;
  width: 100%;
}
</style>
