import type { Metadata } from 'next'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import ConsentManager from '@/components/ui/ConsentManager'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description: 'Datenschutzhinweise des Pool Billard Club Erding e.V.',
}

export default function DatenschutzPage() {
  return (
    <>
      <div className="bg-charcoal-900 border-b border-white/5 py-20">
        <Container>
          <SectionHeading
            label="Rechtliches"
            title="Datenschutz"
            subtitle="Hinweise zur Verarbeitung personenbezogener Daten auf der Website des Pool Billard Club Erding e.V."
          />
        </Container>
      </div>

      <section className="py-20 bg-charcoal-950">
        <Container className="max-w-3xl space-y-10 text-sm leading-relaxed text-white/70">

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">1. Verantwortlicher</h2>
            <div className="space-y-1">
              <p>PBC Erding e.V.</p>
              <p>c/o Bowling Castle</p>
              <p>Robert-Bosch-Straße 3</p>
              <p>85435 Erding</p>
              <p>Telefon: 08122-54432</p>
              <p>E-Mail: info@pbc-erding.de</p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">2. Allgemeine Hinweise</h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies für die
              Bereitstellung dieser Website, für die Beantwortung von Anfragen
              oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Dabei
              beachten wir insbesondere die Datenschutz-Grundverordnung (DSGVO)
              und die für Telemedien geltenden Vorschriften.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">3. Hosting und Server-Logfiles</h2>
            <p>
              Diese Website wird bei der netcup GmbH, Emmy-Noether-Straße 10,
              76131 Karlsruhe, E-Mail: data-protection@anexia-it.com, gehostet.
              Beim Aufruf unserer Website werden durch den Webserver technisch
              erforderliche Informationen verarbeitet. Dazu gehören insbesondere
              die IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Datei
              oder URL, der HTTP-Status, übertragene Datenmenge, Referrer-URL
              sowie Angaben zu Browser, Betriebssystem und Endgerät.
            </p>
            <p>
              Die Verarbeitung erfolgt, um die Website technisch bereitzustellen,
              die Stabilität und Sicherheit zu gewährleisten und Missbrauch erkennen
              und abwehren zu können. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
              Unser berechtigtes Interesse liegt in einem sicheren und funktionsfähigen
              Betrieb der Website.
            </p>
            <p>
              Die Daten werden auf Servern der netcup GmbH in deren Rechenzentrum
              in Nürnberg (Deutschland) verarbeitet. Eine Übermittlung in Drittländer
              findet nicht statt.
            </p>
            <p>
              Mit der netcup GmbH besteht eine Vereinbarung zur Auftragsverarbeitung
              (AVV) gemäß Art. 28 DSGVO. Weitere Informationen zum Datenschutz bei
              netcup finden Sie unter:{' '}
              <a
                href="https://www.netcup.com/de/kontakt/datenschutzerklaerung"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400 transition-colors underline underline-offset-2"
              >
                www.netcup.com/de/kontakt/datenschutzerklaerung
              </a>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">4. Schriftarten und technische Auslieferung</h2>
            <p>
              Diese Website verwendet die Schriftarten „Inter" und „Bebas Neue" über
              die Next.js-Funktion <code>next/font</code>. Die benötigten Schriftdateien
              werden beim Build-Prozess lokal eingebunden und von unserem Webserver
              ausgeliefert. Beim Aufruf der Website findet dadurch keine unmittelbare
              Nachladung von Schriftdateien durch externe Anbieter statt.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes
              Interesse liegt in einer einheitlichen, performanten und datensparsamen
              Darstellung der Website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">5. Kontaktaufnahme per E-Mail oder Telefon</h2>
            <p>
              Wenn Sie uns per E-Mail oder telefonisch kontaktieren, verarbeiten wir
              die von Ihnen mitgeteilten Daten – insbesondere Ihren Namen, Ihre
              Kontaktdaten und den Inhalt Ihrer Nachricht – zur Bearbeitung Ihres
              Anliegens.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die
              Kontaktaufnahme auf den Abschluss oder die Durchführung eines Vertrags
              oder vorvertraglicher Maßnahmen gerichtet ist, sowie Art. 6 Abs. 1
              lit. f DSGVO für sonstige Anfragen. Unser berechtigtes Interesse
              besteht in der sachgerechten Bearbeitung von Vereins-, Trainings-,
              Turnier- und Mitgliedschaftsanfragen.
            </p>
            <p>
              Die Daten bleiben gespeichert, bis Ihr Anliegen abschließend bearbeitet
              ist und keine gesetzlichen Aufbewahrungspflichten mehr entgegenstehen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">6. Kontaktformular</h2>
            <p>
              Das Kontaktformular auf dieser Website ist als sogenanntes
              mailto-Formular realisiert. Die Funktionsweise unterscheidet sich
              grundlegend von einem serverseitig verarbeiteten Formular:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Die von Ihnen eingegebenen Daten (Vorname, Nachname, E-Mail-Adresse,
                Betreff, Nachricht) werden ausschließlich lokal in Ihrem Browser
                verarbeitet.
              </li>
              <li>
                Es findet keine Übertragung dieser Daten an unseren Webserver statt.
                Die Daten werden auf dieser Website weder gespeichert noch protokolliert.
              </li>
              <li>
                Ein Klick auf „Nachricht per E-Mail senden" öffnet Ihr lokal
                installiertes E-Mail-Programm (z. B. Outlook, Apple Mail) mit einer
                vorausgefüllten E-Mail an info@pbc-erding.de.
              </li>
              <li>
                Die tatsächliche Übermittlung der Nachricht an uns erfolgt erst dann,
                wenn Sie die vorbereitete E-Mail aus Ihrem E-Mail-Programm heraus
                aktiv absenden.
              </li>
            </ul>
            <p>
              Für die anschließende Verarbeitung der bei uns eingehenden E-Mail gelten
              die Hinweise unter Ziffer 5 (Kontaktaufnahme per E-Mail oder Telefon).
            </p>
            <p>
              Sofern Ihr E-Mail-Programm bei der Übermittlung personenbezogene Daten
              verarbeitet (z. B. Metadaten, IP-Adresse des Absenders), richtet sich
              dies nach den Datenschutzhinweisen Ihres E-Mail-Anbieters.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">7. Einwilligungsverwaltung</h2>
            <p>
              Beim ersten Besuch dieser Website wird ein Hinweisbanner angezeigt,
              über den Sie der Speicherung Ihrer Einwilligungsentscheidung zustimmen
              oder diese ablehnen können. Ihre Auswahl wird ausschließlich lokal
              in Ihrem Browser (localStorage) gespeichert und nicht an unsere
              Server übermittelt. Es handelt sich dabei nicht um ein Cookie im
              technischen Sinne, sondern um einen browserseitigen Speichereintrag.
            </p>
            <p>
              Rechtsgrundlage für die Speicherung dieser Einwilligungsentscheidung
              ist Art. 6 Abs. 1 lit. c DSGVO i.V.m. § 25 TDDDG (Nachweispflicht
              über erteilte oder verweigerte Einwilligung). Sie können Ihre
              Entscheidung jederzeit hier anpassen:
            </p>
            <ConsentManager />
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">8. Cookies, Tracking und eingebettete Inhalte</h2>
            <p>
              Nach dem aktuellen Stand dieser Website setzen wir keine Analyse-,
              Marketing- oder sonstigen nicht technisch erforderlichen Cookies ein.
              Ebenso verwenden wir auf den Seiten derzeit keine eingebetteten Karten,
              Videos, Social-Media-Plugins oder vergleichbare Drittdienste, die beim
              Laden der Seite personenbezogene Daten an externe Anbieter übermitteln.
            </p>
            <p>
              Sollten künftig einwilligungsbedürftige Technologien oder Inhalte
              eingebunden werden, erfolgt dies nur nach entsprechender Anpassung
              dieser Datenschutzerklärung und, soweit gesetzlich erforderlich, erst
              nach Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO sowie § 25 TDDDG.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">9. Externe Links</h2>
            <p>
              Unsere Website enthält Links zu externen Websites, zum Beispiel zu
              Sportverbänden, Partnern, Unterstützern oder zu unserem Facebook-Auftritt.
              Beim bloßen Besuch unserer Website werden an diese Anbieter keine Daten
              übermittelt, soweit es sich nur um normale Verlinkungen handelt. Erst
              wenn Sie einen solchen Link aktiv anklicken, verlassen Sie unsere
              Website und es können personenbezogene Daten durch den jeweiligen
              Drittanbieter verarbeitet werden.
            </p>
            <p>
              Für die Datenverarbeitung auf den verlinkten externen Seiten sind
              ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">10. Empfänger von Daten</h2>
            <p>
              Personenbezogene Daten werden nur dann an Dritte weitergegeben, wenn
              dies für den Betrieb der Website, die Bearbeitung Ihrer Anfrage, die
              Erfüllung gesetzlicher Pflichten oder die Wahrung berechtigter Interessen
              erforderlich ist. Auftragsverarbeiter im Sinne von Art. 28 DSGVO ist
              insbesondere die netcup GmbH, Emmy-Noether-Straße 10, 76131 Karlsruhe, als
              Hosting-Dienstleister dieser Website.
            </p>
            <p>
              Eine gezielte Übermittlung personenbezogener Daten in Staaten außerhalb
              der Europäischen Union oder des Europäischen Wirtschaftsraums findet
              durch den aktuellen Betrieb dieser Website nach unserem derzeitigen
              Kenntnisstand nicht statt. Davon unberührt bleibt eine mögliche
              Datenverarbeitung durch externe Anbieter, wenn Sie verlinkte Drittseiten
              aufrufen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">11. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur solange, wie dies für die
              jeweiligen Verarbeitungszwecke erforderlich ist. Anschließend werden
              die Daten gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten
              oder berechtigten Gründe für eine längere Aufbewahrung bestehen.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">12. Ihre Rechte</h2>
            <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Recht auf Auskunft nach Art. 15 DSGVO,</li>
              <li>Recht auf Berichtigung nach Art. 16 DSGVO,</li>
              <li>Recht auf Löschung nach Art. 17 DSGVO,</li>
              <li>Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO,</li>
              <li>Recht auf Datenübertragbarkeit nach Art. 20 DSGVO,</li>
              <li>Recht auf Widerspruch nach Art. 21 DSGVO,</li>
              <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft.</li>
            </ul>
            <p>
              Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
              zu beschweren. Für den Verein zuständig ist insbesondere das Bayerische
              Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-black uppercase text-white">13. Stand und Aktualisierung</h2>
            <p>
              Diese Datenschutzerklärung gilt mit Stand Mai 2026. Wir passen sie an,
              wenn sich die Website, die eingesetzten Dienste oder die rechtlichen
              Anforderungen ändern.
            </p>
          </div>

        </Container>
      </section>
    </>
  )
}
