export const Prehistoire1 = (props) => {


    return (
    
        <div id='prehistoire'>
              <div>
                <div>
                    <p>
                        C’est bien après l’apparition de l’homme, il y a près de 4 millions d’années en Afrique orientale, que l’on retrouve les premières traces de vie humaine en France. Cette espèce d’hommes est Homo erectus (« l’homme érigé »), le fils de Homo habilis (« l’homme habile »), démarqué des premiers hominidés, les Australopithèques. C’est durant une gigantesque période (environ 950 000 ans) que vont se manifester les premiers balbutiements de l’intelligence humaine. 
                    </p>
                </div>
                <div>
                    <h4>L’homme du paléolithique inférieur (-2 millions, -200 000)</h4>
                    <p>
                    Jusqu’à une époque récente, on avait recensé les plus anciennes présences humaines dans le sud de la France (Alpes Maritimes). Le plus ancien habitat connu (900 000 ans environ) avait été découvert dans la petite caverne du Vallonet, et le plus vieux des Européens, l’homme de Tautavel (-450 000) exhumé en 1971 (en réalité, le crâne d’un jeune homme de 20 ans) dans la grotte de la Caume de l’Arago. Aujourd’hui, les gisements de Haute-Loire (Blassac, Chilhac, La Rochelambert, Nohlac), prouvent que la France était habitée il y a entre un et deux millions d’années !
La présence d’hommes préhistoriques, très fragmentaire, ne devient plus nette qu’à partir d’un million d’années. On trouve des traces d’habitat, soit en plein air, près de cours d’eau ou de lacs (campements de Soleilhac, d’Eguzon et surtout le plus anciennement connu, Terra Amata à Nice, soit plus fréquemment dans les abris-sous-roche. Cependant, aucun site ne comporte d’ossements humains : le plus vieux fossile humain connu, qui daterait de -500 000 ans, ayant été découvert en Haute-Garonne (grotte de la niche à Montmaurin). L’homme du Paléolithique inférieur, qui a connu des périodes de glaciation entrecoupées d’adoucissements climatiques, a façonné des outils caractéristiques de cette période, les bifaces. Il a aussi progressivement maîtrisé le feu (vers -400 000) dont on ne retrouve, pour le moment, que des traces en Europe. En France, les plus anciens témoins (vestiges brûlés, foyers) se situent en Alsace (Achenheim), dans les Alpes maritimes (Terra Amata) et dans l’Hérault (Lunel). Selon certains préhistoriens, l’usage du feu à cette époque – qui a servi d’abord à se chauffer, s’éclaire, se protéger – n’aurait été qu’un phénomène marginal, généralisé à l’époque suivante. 
                    </p>
                </div>
                <div>
                <h4>Le Néandertalien : l’homme du paléolithique moyen (-200 000, -35 000)</h4>
                    <p>
                    Cousin mal aimé des Européens, l’homme de Néandertal (nom du site allemand où furent découverts, en 1856, des ossements humains) fait son apparition au cours du dernier âge interglaciaire (Riss-Würm). On le trouve aussi au Proche-Orient (mais plus tôt), mais c’est sur le vieux continent qu’il a laissé le plus de traces. À cette époque, les habitations construites se multiplient, aussi bien en plein air (traces de huttes, de tentes circulaires), que dans les grottes où sont érigées les cabanes (grotte du Lazaret, près de Nice). Bien que le niveau intellectuel des Néandertaliens ait été moins élevé que celui de leur successeurs, ils n’en étaient pas pour autant, comme on l’a cru longtemps, des brutes, même si leur aspect physique n’avait rien d’engageant (mâchoire puissante, bourrelets sub-orbitaux). Ils maîtrisent de mieux en mieux la technique de la taille du silex (technique Levallois), la fabrication d’outils sur éclats, plus légers et plus précis, leur permet d’être meilleurs chasseurs. Les Néandertaliens ont aussi été les premiers hommes à enterrer leurs morts (premières sépultures, datant environ de 50 000 ans, découvertes à la Chapelle-aux-Saints en Corrèze et à la Ferrassie en Dordogne). Le squelette d’un Néandertalien inhumé sous un amas de pierres (site de Regardou) constitue le seul mode d’inhumation connu mais aussi la plus ancienne sépulture volontaire d’Europe (environ 80 000 ans). On a longtemps cru que les Néandertaliens avaient brusquement disparu d’Europe il y a 30 000 ans. L’on sait depuis la découverte en 1979 d’ossements de ce type d’homme (abri-sous-roche à Saint-Césaire, en Charente) qu’ils vécurent encore des millénaires aux côtés des hommes modernes. 
                    </p>
                </div>
              </div>
      </div>
    )
  }
  

export const Prehistoire2 = (props) => {
      return (
        <div id='periods' className='text-center'>
        <h2>Préhistoire 2</h2>
        {props.data.map(section =>(
            <div>
                Prehistoire 2
            </div>
        ))}
    </div>
      )
  }

  export default {
      Prehistoire1,
      Prehistoire2
  }