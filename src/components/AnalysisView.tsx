export default function AnalysisView() {
  return (
    <div className="grid-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="text-[10px] text-muted-foreground font-mono tracking-widest mb-2">
            BEDÖMNING — MOTSTRIDIGA UPPGIFTER
          </div>
          <h2 className="text-lg font-mono font-bold text-foreground tracking-widest">
            ANALYS & NYCKELFRÅGOR
          </h2>
          <div className="w-32 h-px bg-primary mt-2" />
        </div>

        {/* Key questions */}
        <div className="space-y-4">
          <div className="border border-border bg-card p-5">
            <h3 className="text-xs font-mono font-bold text-accent tracking-widest mb-3">
              ■ VAPENINSATSENS BEGRÄNSNING
            </h3>
            <p className="text-xs text-secondary-foreground font-body leading-relaxed">
              Varför sökte vissa amiraler begränsa vapeninsatsen mot de upptäckta ubåtarna?
              Samma personer hävdade senare att ubåtarna var sovjetiska. Om hotet var reellt
              — varför inte bekämpa det med full kraft? Denna motsägelse är central i
              Tunanders analys.
            </p>
          </div>

          <div className="border border-border bg-card p-5">
            <h3 className="text-xs font-mono font-bold text-accent tracking-widest mb-3">
              ■ SONDEN VID MÄLSTEN
            </h3>
            <p className="text-xs text-secondary-foreground font-body leading-relaxed">
              Vid dykoperationer efter incidenten hittades en sond/sändare på botten.
              Tolkningarna skiljer sig: en del bedömare ansåg att det rörde sig om en västlig
              (NATO) sändare, andra menade att det var en tom granat. FOI:s spektrogramanalys
              visade att signalen kunde matcha en svensk helikopterburen sonar (HKP 4) som fått fel.
            </p>
          </div>

          <div className="border border-border bg-card p-5">
            <h3 className="text-xs font-mono font-bold text-accent tracking-widest mb-3">
              ■ SOVJETISK ELLER VÄSTLIG UBÅT?
            </h3>
            <p className="text-xs text-secondary-foreground font-body leading-relaxed">
              Ubåtsskyddskommissionen (1983) pekade mot Sovjetunionen. Granskningskommissionen
              (2001) och Tunander ifrågasatte detta. Bottenspår, ljud- och magnetanalys har
              inte entydigt kunnat binda kränkningarna till en specifik nation.
            </p>
          </div>

          <div className="border border-border bg-card p-5">
            <h3 className="text-xs font-mono font-bold text-accent tracking-widest mb-3">
              ■ KOMMISSIONERNAS TROVÄRDIGHET
            </h3>
            <p className="text-xs text-secondary-foreground font-body leading-relaxed">
              Tre stora utredningar — Ubåtsskyddskommissionen, Granskningskommissionen och
              Grandinrapporten — når delvis motstridiga slutsatser. Perspektivet avgör
              tolkningen: "sanningen finns i betraktarens öga" (Tunander, 2009).
            </p>
          </div>

          <div className="border border-classified border-dashed bg-card p-5">
            <h3 className="text-xs font-mono font-bold text-classified tracking-widest mb-3">
              ■ GUSTAFSSONS SAMMANBLANDNING
            </h3>
            <p className="text-xs text-secondary-foreground font-body leading-relaxed">
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
