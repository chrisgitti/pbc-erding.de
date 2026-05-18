# Kontaktformular – E-Mail-Routing

Diese Datei steuert, an welche E-Mail-Adressen eine Kontaktanfrage je nach gewähltem
Betreff weitergeleitet wird. Sie wird beim `npm run build` automatisch eingelesen und
in die Website übernommen – eine Code-Änderung ist nicht notwendig.

---

## Anleitung für Redakteure

### Aufbau eines Betreff-Eintrags

Jeder Betreff wird als Markdown-Abschnitt der zweiten Ebene (`##`) definiert:

```
## <Interner Schlüssel> | <Anzeigetext im Dropdown>
to: empfaenger@beispiel.de, zweiter@beispiel.de
cc: kopie@beispiel.de
```

| Zeile     | Bedeutung                                                                 |
|-----------|---------------------------------------------------------------------------|
| `## …`    | Überschrift: links der interne Schlüssel (kein Leerzeichen, nur a–z, 0–9, Bindestrich), rechts nach `\|` der Text, der im Dropdown erscheint |
| `to:`     | **Pflicht.** Haupt-Empfänger, kommagetrennt. Mindestens eine Adresse.    |
| `cc:`     | **Optional.** CC-Empfänger, kommagetrennt. Zeile weglassen wenn nicht benötigt. |

### Regeln

- Der **Platzhalter-Eintrag** (`## -- | Bitte wählen…`) darf nicht gelöscht werden –
  er repräsentiert den leeren Zustand des Dropdowns.
- Die **Reihenfolge** der Abschnitte bestimmt die Reihenfolge im Dropdown.
- E-Mail-Adressen werden **nicht validiert** – bitte auf korrekte Schreibweise achten.
- Leerzeichen vor und nach Kommas bei mehreren Adressen sind erlaubt.
- Die `cc:`-Zeile kann vollständig weggelassen werden (nicht nur leer lassen).
- Schlüssel müssen **eindeutig** sein. Doppelte Schlüssel überschreiben sich gegenseitig.
- Schlüssel dürfen **keine Sonderzeichen** außer Bindestrich (`-`) enthalten.

### Beispiel mit allen Möglichkeiten

```markdown
## mitgliedschaft | Mitgliedschaft
to: vorstand@pbc-erding.de
cc: info@pbc-erding.de

## turnier | Turnieranmeldung
to: turnier@pbc-erding.de, info@pbc-erding.de
```

---

## Konfiguration

<!-- ------------------------------------------------------------------ -->
<!-- BETREFF-EINTRÄGE – hier pflegen                                      -->
<!-- ------------------------------------------------------------------ -->

## -- | Bitte wählen…
to: info@pbc-erding.de

## mitgliedschaft | Mitgliedschaft
to: info@pbc-erding.de

## training | Schnuppertraining
to: info@pbc-erding.de
cc: bartclaessen76@gmail.com

## turnier | Turnieranmeldung
to: turnier@pbc-erding.de
cc: info@pbc-erding.de

## unterstuetzung | Unterstützung/Partnerschaft
to: info@pbc-erding.de

## sonstiges | Sonstiges
to: info@pbc-erding.de
