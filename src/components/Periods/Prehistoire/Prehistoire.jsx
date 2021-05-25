import PeriodDetailsCSS from "../../Periods/PeriodDetails.module.css"
import {useEffect, useState} from "react"
import Aos from "aos"
import "aos/dist/aos.css"

import CroM from "../../../assets/img/cro_magnon.jpg"
import Pierre from "../../../assets/img/pierre.jpg"
import Metal from "../../../assets/img/metal.jpeg"

export const Prehistoire1 = (props) => {

    useEffect(()=>{
        Aos.init();
    }, [])

    return (
    
        <div id={PeriodDetailsCSS.prehistoire}>
              <div>
                  <div className={PeriodDetailsCSS.intro}>
                    <div className={PeriodDetailsCSS.intro_text}>
                        <p>
                            C’est bien après l’apparition de l’homme, il y a près de 4 millions d’années en Afrique orientale, 
                            que l’on retrouve les premières traces de vie humaine en France. Cette espèce d’hommes est Homo erectus
                            (« l’homme érigé »), le fils de Homo habilis (« l’homme habile »), démarqué des premiers hominidés, les Australopithèques. 
                            C’est durant une gigantesque période (environ 950 000 ans) que vont se manifester les premiers balbutiements de 
                            l’intelligence humaine. 
                        </p>
                    </div>
                    <div>
                        <img className={PeriodDetailsCSS.zoom} src="http://histoiredutemps.free.fr/img/ter/hom/p.boisei.JPG" />
                    </div>
                </div>
                <div className={PeriodDetailsCSS.main_content}>
                    <div data-aos="fade-up" data-aos-duration="1000" className={PeriodDetailsCSS.main_text}>
                        <h4>L’homme du paléolithique inférieur (-2 millions, -200 000)</h4>
                        <p>
                            Jusqu’à une époque récente, on avait recensé les plus anciennes présences humaines dans le sud de la France (Alpes Maritimes). 
                            Le plus ancien habitat connu (900 000 ans environ) avait été découvert dans la petite caverne du Vallonet, et le plus vieux 
                            des Européens, l’homme de Tautavel (-450 000) exhumé en 1971 (en réalité, le crâne d’un jeune homme de 20 ans) dans la grotte 
                            de la Caume de l’Arago. Aujourd’hui, les gisements de Haute-Loire (Blassac, Chilhac, La Rochelambert, Nohlac), prouvent que 
                            la France était habitée il y a entre un et deux millions d’années ! <br/> La présence d’hommes préhistoriques, très fragmentaire, 
                            ne devient plus nette qu’à partir d’un million d’années. On trouve des traces d’habitat, soit en plein air, près de cours 
                            d’eau ou de lacs (campements de Soleilhac, d’Eguzon et surtout le plus anciennement connu, Terra Amata à Nice, soit plus 
                            fréquemment dans les abris-sous-roche. Cependant, aucun site ne comporte d’ossements humains : le plus vieux fossile humain 
                            connu, qui daterait de -500 000 ans, ayant été découvert en Haute-Garonne (grotte de la niche à Montmaurin). L’homme du 
                            Paléolithique inférieur, qui a connu des périodes de glaciation entrecoupées d’adoucissements climatiques, a façonné des 
                            outils caractéristiques de cette période, les bifaces. Il a aussi progressivement maîtrisé le feu (vers -400 000) dont on ne 
                            retrouve, pour le moment, que des traces en Europe. En France, les plus anciens témoins (vestiges brûlés, foyers) se situent 
                            en Alsace (Achenheim), dans les Alpes maritimes (Terra Amata) et dans l’Hérault (Lunel). Selon certains préhistoriens, 
                            l’usage du feu à cette époque – qui a servi d’abord à se chauffer, s’éclaire, se protéger – n’aurait été qu’un phénomène 
                            marginal, généralisé à l’époque suivante. 
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" data-aos-offset="300" className={PeriodDetailsCSS.main_text}>
                    <h4>Le Néandertalien : l’homme du paléolithique moyen (-200 000, -35 000)</h4>
                        <p>
                            Cousin mal aimé des Européens, l’homme de Néandertal (nom du site allemand où furent découverts, en 1856, des ossements humains) 
                            fait son apparition au cours du dernier âge interglaciaire (Riss-Würm). On le trouve aussi au Proche-Orient (mais plus tôt), 
                            mais c’est sur le vieux continent qu’il a laissé le plus de traces. À cette époque, les habitations construites se multiplient, 
                            aussi bien en plein air (traces de huttes, de tentes circulaires), que dans les grottes où sont érigées les cabanes 
                            (grotte du Lazaret, près de Nice). Bien que le niveau intellectuel des Néandertaliens ait été moins élevé que celui de leur 
                            successeurs, ils n’en étaient pas pour autant, comme on l’a cru longtemps, des brutes, même si leur aspect physique n’avait 
                            rien d’engageant (mâchoire puissante, bourrelets sub-orbitaux). Ils maîtrisent de mieux en mieux la technique de la taille du 
                            silex (technique Levallois), la fabrication d’outils sur éclats, plus légers et plus précis, leur permet d’être meilleurs 
                            chasseurs. Les Néandertaliens ont aussi été les premiers hommes à enterrer leurs morts (premières sépultures, datant environ 
                            de 50 000 ans, découvertes à la Chapelle-aux-Saints en Corrèze et à la Ferrassie en Dordogne). Le squelette d’un Néandertalien 
                            inhumé sous un amas de pierres (site de Regardou) constitue le seul mode d’inhumation connu mais aussi la plus ancienne 
                            sépulture volontaire d’Europe (environ 80 000 ans). On a longtemps cru que les Néandertaliens avaient brusquement disparu 
                            d’Europe il y a 30 000 ans. L’on sait depuis la découverte en 1979 d’ossements de ce type d’homme (abri-sous-roche à 
                            Saint-Césaire, en Charente) qu’ils vécurent encore des millénaires aux côtés des hommes modernes. 
                        </p>
                    </div>
                </div>
              </div>
      </div>
    )
  }
  

export const Prehistoire2 = (props) => {
      return (
        <div id={PeriodDetailsCSS.prehistoire}>
            <div>
                <div className={PeriodDetailsCSS.intro}>
                    <div>
                        <img className={PeriodDetailsCSS.zoom} src={CroM} />
                    </div>
                    <div className={PeriodDetailsCSS.intro_text}>
                        <p>
                        Les premier Homo Sapiens sapiens sont apparus il y a environ 150 000 ans, d’abord en Afrique et au Proche-Orient, 
                        plus tardivement en Europe (vers 35 000 av. J.-C., le plus ancien fossile humain ayant été découvert en 1868, 
                        à Cro-Magnon en Dordogne). L’Homo sapiens sapiens n’a pas donné naissance à d’autres espèces : c’est notre ancêtre direct 
                        et ses caractéristiques anatomiques sont très proches des nôtres. 
                        </p>
                    </div>
                </div>
                <div className={PeriodDetailsCSS.main_content}>
                    <div className={PeriodDetailsCSS.main_text}>
                        <h4>Des chasseurs hors du commun </h4>
                        <p>
                            Les premiers hommes modernes ont vécu lors de la dernière grande glaciation (Würm) d’Europe, et ils se sont 
                            particulièrement bien adaptés à ces temps frileux. On constate ainsi une accélération des progrès techniques 
                            (notamment au Solutréen et au Magdalénien). L’outillage se diversifie et se spécialise. On fabrique des couteaux 
                            (lames longues et minces), des burins, des grattoirs, des perçoirs destinés à travailler le bois de renne, 
                            l’os ou l’ivoire des mammouths et à façonner des propulseurs (qui améliorent la technique de chasse à distance), 
                            des pointes fixées à un manche (sagaies), des hameçons et même des aiguilles à chas pour la couture. Chasseur expert, 
                            l’homme de Cro-Magnon a des proies favorites, bœufs musqués, rhinocéros laineux, chevaux, mais surtout les rennes 
                            (énormes avec des ramures de quatre mètres d’envergure). Il habite généralement en plein air, dans des huttes 
                            ou des tentes circulaires ou oblongues qui lui servent de campements temporaires (les sites magdaléniens de chasseurs 
                            de rennes d’Etiolles et de Pincevent dans le Bassin parisien sont les plus spectaculaires). La présence d’un ou 
                            plusieurs foyers dans les habitations montre que le feu sert aussi comme agent de transformation des matières 
                            premières grâce à la chaleur. Les inhumations volontaires deviennent plus fréquentes mais aussi plus complexes. 
                            En général, les corps des défunts, souvent couchés en « chien de fusil » ou les jambes repliées sur le torse, 
                            sont déposés dans une fosse individuelle ou collective, puis saupoudrés d’ocre rouge. 
                        </p>
                    </div>
                    <div className={PeriodDetailsCSS.main_text}>
                    <h4>Le Néandertalien : l’homme du paléolithique moyen (-200 000, -35 000)</h4>
                        <p>
                            Avec l’homme de Cro-Magnon apparaissent les premières manifestations esthétiques. L’art pariétal (sur parois de roches) 
                            est représenté en France dans près de 150 sites répartis sur tout le territoire mais avec plus de fréquence dans le Quercy, 
                            l’Ariège, la région rhodanienne et surtout le Périgord (vallée de la Vézère : seul endroit au monde où l’on trouve  
                            autant de grottes décorées). L’art pariétal ne se trouve pas systématiquement dans l’obscurité des cavernes, il orne aussi
                            l’entrée des grottes (Pair-non-Pair en Gironde, La Magdeleine dans le Tarn), sur les parois des abris-sous-roches 
                            (Le Cap Blanc en Dordogne) ou des blocs rocheux. Cro-Magnon débute d’abord modestement en gravant des signes ou en dessinant 
                            des points mystérieux. Il sculpte ensuite les « murs » naturels de roche, cette sculpture de bas-reliefs parvient à une 
                            grande maîtrise lors de la civilisation solutréenne (frise du Roc-de-Sers en Charente, du Fourneau-du-Diable en Dordogne). 
                            La peinture fait enfin son apparition, atteignant son apogée au Magdalénien avec les grottes de Niaux (Ardèche), 
                            de Font-de-Gaume et surtout de Lascaux (Dordogne). L’on sait, depuis peu, que l’art pariétal est en réalité plus précoce. 
                            En 1991, dans les calanques de Cassis (à 37 mètres sous la mer) a été découverte la plus ancienne cavité ornée du monde 
                            (45 mains négatives cernées de rouge ou de noir), datant de 25 000 ans. Plus de 100 peintures d’animaux (-17 000) ont aussi 
                            été mises à jour. Les représentations figurées des grottes du paléolithique supérieur sont surtout des animaux, 
                            souvent couplés (bison-cheval) et des tracés géométriques. L’art mobilier de cette époque est aussi très riche notamment 
                            à la fin du Gravéttien, avec la multiplication de petites statuettes de femmes (les « Vénus » : de Brassempouy dans les Landes,
                            de Lespugne en Haute-Garonne). L’art paléolithique s’efface de nos régions, il y a plus de 10 000 ans, lorsque disparaissent 
                            les derniers Magdaléniens. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
      )
  }

  export const Prehistoire3 = (props) => {
    return (
      <div id={PeriodDetailsCSS.prehistoire}>
          <div>
              <div className={PeriodDetailsCSS.intro}>
                  <div className={PeriodDetailsCSS.intro_text}>
                      <p>
                      Aucune autre période, sinon peut-être la Révolution industrielle, n’est comparable à celle du Néolithique 
                      (nommé aussi « âge de la pierre polie »). <br/>En l’espace de quelques milliers d’années (-8000 ; 2 500), l’homme prédateur, 
                      qui avait jusque-là vécu en parasite dans la nature, se nourrit désormais du bétail qu’il élève et des céréales qu’il cultive. 
                      Il fabrique des poteries et commence à se sédentariser, créant ainsi les premières communautés paysannes, qui sont les racines 
                      de nos sociétés actuelles. 
                      </p>
                  </div>
                  <div>
                      <img className={PeriodDetailsCSS.zoom} src={Pierre} />
                  </div>
              </div>
              <div className={PeriodDetailsCSS.main_content}>
                  <div className={PeriodDetailsCSS.main_text}>
                      <h4>Le Mésolithique ou âge de la pierre moyenne  </h4>
                      <p>
                      Situé entre 11 000 et 8 000 ans avant notre ère, le Mésolithique occupe une phase intermédiaire entre la fin du Paléolithique 
                      supérieur et la généralisation de la « révolution néolithique ». C’est à cette époque que le climat se radoucit et devient celui 
                      de l’Europe tempérée d’aujourd’hui. Les forêts remplacent alors la toundra, et le petit gibier (sanglier et cerf), 
                      les gros mammifères de la période glaciaire. <br/>L’activité dominante de l’homme du Mésolithique, que l’on retrouve un peu partout 
                      en France, reste la chasse (mais la pêche se généralise également), et elle suffit, semble-t-il, largement à le nourrir, 
                      ce qui pourrait expliquer que l’agriculture, avec les contraintes qu’elle impose, soit restée pendant des millénaires une 
                      activité « peu rentable ». <br/> Cependant, la découverte récente de grains de légumineuses dans la Baume du Font-Brégoua à Salernes 
                      (Var) ainsi que dans la grotte de l’Abeurador à Félines-Minervois (Hérault) atteste l’existence d’une véritable proto-agriculture 
                      au Mésolithique, au moins dans ces régions. 
                      </p>
                  </div>
                  <div className={PeriodDetailsCSS.main_text}>
                  <h4>La Révolution néolithique</h4>
                      <p>
                      Le Proche et le Moyen-Orient ont été, il y a environ 10 000 ans avant notre ère, le berceau de la révolution néolithique. 
                      C’est à partir de cette zone de création, que se diffusent les nouvelles inventions en Europe, mais quelques milliers d’années après. 
                      Deux axes essentiels semblent avoir introduit les premières communautés paysannes en France : d’abord la voie méditerranéenne 
                      (au Vème millénaire) qui touche le Sud (des Alpes Maritimes au Roussillon, sans oublier la Corse) puis la vallée danubienne 
                      (au IVème millénaire) qui atteint le Nord (des régions rhénanes au Bassin parisien), l’Ouest ayant été « néolithisé » à la fois 
                      par des pionniers méditerranéens et danubiens. <br/> L’outillage du Néolithique, bien conservé dans les tourbières ou quelques 
                      grottes sèches du littoral méditerranéen, reste dominé par la hache polie qu’on utilise à des fins pacifiques, notamment pour 
                      le travail du bois, mais aussi guerrières. Les animaux domestiques (moutons, chèvres, porcs, bœufs) comme les blés (orge, seigle) 
                      constituent la base de l’alimentation et la poterie, autre caractère original du Néolithique, fait son apparition. 
                      La conséquence, immense pour l’avenir de ce nouveau cadre économique, est la progressive sédentarisation des populations. 
                      L’habitat, désormais destiné à des séjours plus longs, se transforme et, à part quelques cas (grotte de la Magdeleine dans 
                      l’Hérault, abri de Font-Juvénal, près de Carcassonne), se situe en plein air : cités lacustres, huttes rectangulaires 
                      ou arrondies construites en matériaux végétaux dans les régions boisées, ou en pierres sèches dans les régions calcaires. 
                      Des fouilles récentes ont mis à jour de nombreux villages. 
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
}

export const Prehistoire4 = (props) => {
    return (
      <div id={PeriodDetailsCSS.prehistoire}>
          <div>
              <div className={PeriodDetailsCSS.intro}>
                    <div>
                      <img className={PeriodDetailsCSS.zoom} src={Metal} />
                  </div>
                  <div className={PeriodDetailsCSS.intro_text}>
                      <p>
                        Avec l’introduction du travail du métal qui supplante définitivement celui de la pierre, la Gaule entre dans une période 
                        qui va durer plus de 2000 ans (du milieu du troisième millénaire avant notre ère jusqu’à la romanisation de l’Occident) 
                        et que l’on désigne sous le nom de protohistoire. Tout d’abord marquée par la métallurgie du cuivre et du bronze, la Gaule 
                        entre définitivement dans l’âge du fer avec la domination des tribus celtiques. C’est alors qu’elle noue des relations de plus 
                        en plus étroites avec des peuples déjà entrés dans l’histoire : Grecs, Étrusques, Phéniciens puis Romains, ces derniers 
                        mettant fin à son indépendance après la conquête du pays par les légions de César.
                      </p>
                  </div>
              </div>
              <div className={PeriodDetailsCSS.main_content}>
                  <div className={PeriodDetailsCSS.main_text}>
                      <h4>Les premiers métallurgistes, le chalcolithique (- 2 500, -1 800)</h4>
                      <p>
                        Le travail du métal fit pour la première fois son apparition en Corse et au sud de la Gaule. On travaillait l’or, 
                        l’argent et surtout le cuivre (haches, poignards, coins, aiguilles), technique introduite par l’échange d’objets avec 
                        des pays voisins plus avancés et le savoir-faire de forgerons étrangers. La métallurgie du cuivre, qui coexiste encore 
                        avec le travail de la pierre (d’où le nom de chalcolithique : chalcos : « cuivre », et lithos : « pierre »), est d’abord 
                        attestée dans les Causses de l’Aveyron et du Quercy (importants gisements dans le sud-est du Massif central) avant de se 
                        diffuser dans l’ensemble de la Gaule).  
                      </p>
                  </div>
                  <div className={PeriodDetailsCSS.main_text}>
                    <h4>La métallurgie du bronze (- 1 800, - 800) </h4>
                      <p>
                        C’est probablement en s’apercevant, empiriquement, que des impuretés mêlées au cuivre le rendaient plus solide, que les 
                        métallurgistes mirent au point la fabrication du bronze, alliage de cuivre et d’étain. Découverte vers 2 800 avant notre ère 
                        au Proche-Orient, cette technique apparaît 1 000 après en Europe. Le travail des bronziers de la Gaule est assez bien connu 
                        grâce aux fouilles de centres métallurgiques, notamment celui de Fort-Harrouard à Sorel-Moussel (Eure-et-Loir), où furent 
                        découverts des vestiges de fourneaux, creusets et toute une série d’outils. <br/>
                        À partir de 1200, la production d’objets de bronze (haches, faucilles, poignards, casques, cuirasses) progresse fortement 
                        et s’échange entre les régions. La généralisation du travail du métal diversifie les communautés gauloises. On ne distingue 
                        plus seulement les paysans producteurs de ressources alimentaires, mais aussi les artisans et surtout les guerriers, 
                        caste politique dominante chargée de défendre ou de contrôler les gisements de minerais ou les axes de transport. À la fin 
                        de l’âge du bronze, les villages fortifiés apparaissent dans les régions de plaine et les vallées (Dampierre-sur-le-Doubs, 
                        camp d’Alaric à la hauteur du seuil de Poitou). Un nouveau rituel funéraire (« civilisation des champs d’urnes »), originaire 
                        d’Europe centrale, gagne l’ensemble de la Gaule (sauf les régions atlantiques) : les morts sont incinérés et leurs cendres 
                        déposées dans une urne enfouie dans une fosse.  
                      </p>
                  </div>
                  <div className={PeriodDetailsCSS.main_text}>
                    <h4>L’âge du fer : la Gaule celtique (- 800, -125)</h4>
                      <p>
                        Connue des Hitties d’Asie-Mineure dès le troisième millénaire, la métallurgie du fer se diffuse au Moyen-Orient puis gagne 
                        l’Europe central et la Gaule par la vallée du Danube. Elle s’étend ensuite dans l’ensemble du pays (plus tardivement dans 
                        le Massif armoricain) avec la progression des tribus celtiques. Lors du premier âge du fer (période de Hallstatt, site des 
                        Alpes autrichiennes), la société gauloise est dominée par une caste aristocratique de cavaliers ou de conducteurs de chars. 
                        Cette civilisation, surtout représentée au sud et à l’est, est bien connue grâce aux fouilles des tertres funéraires (tombes à 
                        chars) et des oppida (oppidum du Mont-Lassois à Vix, en Bourgogne). C’est à cette époque que se développent les relations 
                        commerciales entre les Celtes et les peuples les plus civilisés du Bassin méditerranéen, Marseille (Massalia, fondée par les 
                        Grecs de Phocée au VIème avant notre ère) captant l’essentiel des trafics. L’influence grecque est alors dominante, comme en 
                        témoigne le célèbre cratère hellénique de Vix. <br/>
                        Le deuxième âge de fer (période de la Tène, site au nord de Neûchatel) est marqué par l’installation massive des Celtes 
                        dans l’ensemble de la Gaule. La transition vers l’histoire s’accélère avec l’apparition de véritables villes fortifiées 
                        (Bibracte [Autun], capitale des Éduens), l’usage progressif de l’écriture et de la monnaie introduites par les Grecs de Phocée.   
                      </p>
                  </div>
              </div>
          </div>
      </div>
    )
}

  export default {
      Prehistoire1,
      Prehistoire2,
      Prehistoire3,
      Prehistoire4
  }