# Ablaufdiagramm

```mermaid
flowchart TD
    A["Spieler gibt Auswahl als Prompt ein (Schere/Stein/Papier)"] --> B["Computer wählt zufällig"]
    B --> C["Sieger wird ermittelt"]
    C --> D["Punktestand wird aktualisiert"]
    D --> E["Nächste Runde startet"]
    E --> F{"5 Runden gespielt?"}
    F -->|Nein| A
    F -->|Ja| G["Spiel vorbei, Sieger steht fest"]
