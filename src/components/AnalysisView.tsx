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
          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ VAPENINSATSENS BEGRÄNSNING
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Varför sökte vissa amiraler begränsa vapeninsatsen mot de upptäckta ubåtarna?
              Samma personer hävdade senare att ubåtarna var sovjetiska. Om hotet var reellt
              — varför inte bekämpa det med full kraft? Denna motsägelse är central i
              Tunanders analys.
            </p>
          </div>

          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ SONDEN VID MÄLSTEN
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Vid dykoperationer efter incidenten hittades en sond/sändare på botten.
              Tolkningarna skiljer sig: en del bedömare ansåg att det rörde sig om en västlig
              (NATO) sändare, andra menade att det var en tom granat. FOI:s spektrogramanalys
              visade att signalen kunde matcha en svensk helikopterburen sonar (HKP 4) som fått fel.
            </p>
          </div>

          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ SOVJETISK ELLER VÄSTLIG UBÅT?
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Ubåtsskyddskommissionen (1983) pekade mot Sovjetunionen. Granskningskommissionen
              (2001) och Tunander ifrågasatte detta. Bottenspår, ljud- och magnetanalys har
              inte entydigt kunnat binda kränkningarna till en specifik nation.
            </p>
          </div>

          <div className="border border-border/30 bg-card/50 p-5 photocopy-border aged-edge">
            <h3 className="text-[10px] font-mono font-bold text-accent/80 tracking-[0.2em] mb-3">
              ■ KOMMISSIONERNAS TROVÄRDIGHET
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Tre stora utredningar — Ubåtsskyddskommissionen, Granskningskommissionen och
              Grandinrapporten — når delvis motstridiga slutsatser. Perspektivet avgör
              tolkningen: "sanningen finns i betraktarens öga" (Tunander, 2009).
            </p>
          </div>

          <div className="border border-classified/30 border-dashed bg-card/40 p-5 aged-edge">
            <div className="stamp-classified text-[8px] inline-block mb-3 py-0.5 px-2 border-[1px]">
              HEMLIG HANDLING
            </div>
            <h3 className="text-[10px] font-mono font-bold text-classified/70 tracking-[0.2em] mb-3">
              ■ GUSTAFSSONS SAMMANBLANDNING
            </h3>
            <p className="text-[11px] text-foreground/55 font-body leading-relaxed">
              Gustafsson blandade i sin redogörelse samman händelserna på kvällen den 13 oktober
              med föregående kväll (s. 494). Denna förväxling har bidragit till den förvirring
              som omger det exakta händelseförloppet under de kritiska nätterna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
