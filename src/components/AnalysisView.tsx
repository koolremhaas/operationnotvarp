import spektrogramImg from '@/assets/spektrogram-signal.jpg';
import rapporteringsImg from '@/assets/rapporteringsuttryck.png';

export default function AnalysisView() {
  return (
    <div className="grid-paper min-h-screen relative">
      <div className="absolute inset-0 microfiche-glow pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 py-10 relative">
        <div className="mb-10">
          <div className="text-[8px] text-muted-foreground/50 font-mono tracking-[0.3em] mb-3">
            BEDÖMNING — MOTSTRIDIGA UPPGIFTER
          </div>
          <h2 className="text-base font-mono font-bold text-foreground/90 tracking-[0.15em]">
            ANALYS & NYCKELFRÅGOR
          </h2>
          <div className="w-20 h-px bg-primary/30 mt-3" />
        </div>

        <div className="space-y-3">
          {/* Grundoperationen */}
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ GRUNDOPERATIONEN
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Periskop under framfart observerades på Hårsfjärden mellan Furuholmen och Berganäs
              av två värnpliktiga den 1 oktober 1982 kl. 12:50. Denna observation utlöste
              ubåtsjaktinsatsen. Under operationen gjordes 23 vapeninsatser med 47 sjunkbomber.
              Vid fyra tillfällen sprängdes fem minor. Operationen avbröts den 1 november 1982.
            </p>
            <p className="text-[10px] text-foreground/40 font-body leading-relaxed mt-2 border-l-2 border-primary/20 pl-3">
              Notering: i tidiga tidningsrapporter nämns att en värnpliktig sett ett vågsvall,
              sedan ändras berättelsen till att två vittnen sett periskop. Emil Svensson "tycks
              helt enkelt ha förträngt vad som egentligen sades under det förhör han själv höll"
              (Magasinet Filter).
            </p>
          </div>

          {/* Vapeninsatsen */}
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ VAPENINSATSENS BEGRÄNSNING
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Lars Hansson: "Hårsfjärden var inte bara en ubåtsjakt, utan det var en
              ubåtsskyddsoperation. Det är den stora olikheten i hur jag och Bror Stefenson
              ser på det här. Jag anser att en sådan här operation är ett typexempel vad
              militärbefälhavaren skall leda med order."
            </p>
            <p className="text-[10px] text-foreground/40 font-body leading-relaxed mt-2 border-l-2 border-classified/20 pl-3">
              "Att i efterhand få reda på att Försvarsstabschefen hade varit nere på Mällsten
              och diskuterat tekniken och gett order till Kviman om vilka kriterier som skulle
              gälla för att man skulle få avfyra en mina."
            </p>
          </div>

          {/* Signalspaning */}
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ SIGNALSPANINGEN
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Arbetsgruppen anförde att endast fartygsburna signalspaningssystem hade använts.
              Vissa indikationer erhölls som kunde tyda på att ubåtar från såväl Warszawapakten
              som NATO befunnit sig i närområdet. FRA:s chef Pär Kettis avslöjade senare att
              myndigheten inte varit inblandad — signalspaningen var marinens egen, med primitiv
              utrustning. Marinen hade registrerat två sovjetiska handelsfartyg och presenterat
              det som bevis.
            </p>
          </div>

          {/* Transpondern */}
          <div className="border border-classified/30 border-dashed bg-card/40 p-5 aged-edge">
            <div className="stamp-classified text-[8px] inline-block mb-3 py-0.5 px-2 border-[1px]">
              HEMLIG HANDLING
            </div>
            <h3 className="text-[10px] font-mono font-bold text-classified/70 tracking-[0.2em] mb-3">
              ■ TRANSPONDERN VID DANZIGER GATT
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Dykarna lokaliserade runt mikrofon 5 ett föremål: ca 30cm långt, liknande en vals
              eller brödkavel, fastsat med band på en ca 40cm lång platta. Övervuxet med sjögräs.
              Tolkningar: västlig sändare (NATO-transponder) eller tom granat? FOI:s
              spektrogramanalys visade att signalen kunde matcha HKP 4-sonaren.
            </p>
            <div className="mt-3 border border-border/20 bg-background/50 p-2">
              <img
                src={spektrogramImg}
                alt="Spektrogram av den registrerade signalen"
                className="w-full max-h-48 object-contain microfiche-img"
                loading="lazy"
              />
              <div className="text-[8px] text-muted-foreground/40 font-mono mt-1 tracking-wider">
                SPEKTROGRAM — REGISTRERAD SIGNAL · FOI ANALYS
              </div>
            </div>
          </div>

          {/* Amalia */}
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ 3.47-BANDET — MOTORSEGLAREN AMALIA
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              2007 gav marininspektören FOI i uppdrag att undersöka påståendena. Regeringen
              hävde hemligstämpeln på 3.47-bandet. Slutsats: marinens viktigaste tekniska
              bevis visade sig vara en inspelning av den svenska motorseglaren Amalia.
            </p>
          </div>

          {/* Bottenspår */}
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ BOTTENSPÅREN — MÄRSGARN & BELOS ANKRING
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Påstådda bottenspår vid Märsgarns hamn tillskrevs miniubåtar med larvband
              ("tethered reparationsubåtar"). Om korrekt måste ett moderfartyg av Belos
              storlek ha legat inom en kabellängd — i Märsgarn, en aktiv marinbasering.
              Helt otänkbart.
            </p>
            <p className="text-[10px] text-foreground/40 font-body leading-relaxed mt-2 border-l-2 border-primary/20 pl-3">
              Belos loggbok 14 oktober: kl 15:59 ankrar med bogankare, stuckit 70m kätting.
              Djup på platsen: 38m. 70m kätting minus 38m djup = 32m släpspår.
              Släpspåret på platsen: drygt 30m långt.
            </p>
          </div>

          {/* Epistemologi */}
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ EPISTEMOLOGISK FÖRSKJUTNING
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed mb-3">
              Rapporteringsuttrycken för bedömning av främmande undervattensverksamhet
              förändrades markant mellan 1984 och 1994. Från "Säker kränkning" till
              "Konstaterad fr uv-vht kan ej uteslutas". En gradvis försvagning som speglar
              växande osäkerhet.
            </p>
            <div className="border border-border/20 bg-background/50 p-2">
              <img
                src={rapporteringsImg}
                alt="Sammanställning över rapporteringsuttryck"
                className="w-full max-h-48 object-contain microfiche-img"
                loading="lazy"
              />
              <div className="text-[8px] text-muted-foreground/40 font-mono mt-1 tracking-wider">
                RAPPORTERINGSUTTRYCK 1984–1994
              </div>
            </div>
          </div>

          {/* Gustafsson */}
          <div className="border border-classified/30 border-dashed bg-card/40 p-5 aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-classified/70 tracking-[0.2em] mb-3">
              ■ GUSTAFSSONS SAMMANBLANDNING
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Gustafsson blandade i sin redogörelse samman händelserna på kvällen den 13 oktober
              med föregående kväll (s. 494). Denna förväxling har bidragit till förvirringen
              kring det exakta händelseförloppet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
