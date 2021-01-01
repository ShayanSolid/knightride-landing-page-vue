<template>
  <div class="container pt-5">

    <AppDetailImageLeft :header='create_ride.header' :body='create_ride.body'
                        image-src="create-ride.png" id="create_ride"/>

    <AppDetailImageRight :header='ride_take.header' :body='ride_take.body'
                         image-src="ride-take.png" id="create_ride"/>

    <AppDetailImageLeft :header='chat_screen.header' :body='chat_screen.body'
                        image-src="chat.png" id="create_ride"/>

    <AppDetailImageRight :header='profile_screen.header' :body='profile_screen.body'
                         image-src="profile.png" id="create_ride"/>

    <AppDetailImageLeft :header='profile2_screen.header' :body='profile2_screen.body'
                        image-src="profile2.png" id="create_ride"/>

    <AppDetailImageRight :header='profile3_screen.header' :body='profile3_screen.body'
                         image-src="profile3.png" id="create_ride"/>


  </div>
</template>

<script>
import AppDetailImageLeft from './sectionA/AppDetailImageLeft';
import AppDetailImageRight from './sectionA/AppDetailImageRight';

export default {
  name: 'SectionB',
  components: { AppDetailImageRight, AppDetailImageLeft },
  data() {
    return {
      create_ride: {
        header: 'Sei ein Held und \n' +
          'nimm mit',
        body: 'Du bist schneller durch als du\n' +
          'denkst.\n' +
          'In nur Sekunden hast du auf \n' +
          'Knightride einen Ride angeboten.',
      },
      ride_take: {
        header: 'Schnelle Kommunikation\n' +
          'und Zugang zu Rides',
        body: 'Du hast den passenden Ride für dich \n' +
          'gefunden? Dann schreib den Knight\n' +
          'einfach mit “    „ an und fangt an\n' +
          'zu chatten um alles weitere zu klären.\n' +
          'Geht tausend Mal schneller als auf eine\n' +
          'Anfrage zu warten',
      },
      chat_screen: {
        header: 'Messaging on Top',
        body: 'Man könnte es einen kleinen Messenger  \n' +
          'nennen. Mit unserer implementierten\n' +
          'Chatfunktion wirst du umgehend von uns \n' +
          'benachrichtigt wenn du eine Nachricht\n' +
          'von deinem Knight oder Rider empfängst.\n' +
          'So bist du immer up to date und \n' +
          'verpasst keine wichtigen Mitteilungen\n' +
          'über deinen Ride.\n',
      },
      profile_screen: {
        header: 'Knight oder Rider\n' +
          'checken',
        body: 'Und natürlich ist man manchmal auch einfach nur neugierig oder möchte' +
          'auf Nummer sicher gehen. Mach dir ein umfangreiches Bild von \n' +
          'deinem Knight oder Rider. Wie wurde er bewertet? Wie oft war \n' +
          'er/sie/es schon Knight oder ist mitgefahren? Falls eine Bio hinterlassen worden\n' +
          'ist um so besser.\n',
      },
      profile2_screen: {
        header: 'Alle deine Rides\n' +
          'easy im Blick behalten',
        body: 'Du kannst ganz einfach sehen\n' +
          'wo du jemanden mitnehmen wirst,\n' +
          'bei welchem Ride du selbst\n' +
          'mitfährst, sehen wen du mitnimmst \n' +
          'oder bei wem du mitfährst und vieles\n' +
          'mehr.',
      },
      profile3_screen: {
        header: 'Aufrufe im Blick haben \n' +
          'und reagieren',
        body: 'Sieh wer sich für deinen Ride interessiert \n' +
          'und reagiere mit einer Nachricht.',
      },
    };
  },
};
</script>

<style scoped>

</style>
