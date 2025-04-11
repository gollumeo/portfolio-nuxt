<script lang="ts" setup>

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "~/nuxt/components/ui/accordion";
</script>

<template>
  <section class="rounded-lg px-4 py-2 md:col-span-2 bg-gollumeo-secondary flex flex-col gap-4">
    <h2 class="text-xl md:text-3xl font-bold mt-2">Quel feu brûle en moi</h2>
    <Accordion collapsible type="single">
      <AccordionItem class="bg-gollumeo-primary text-gollumeo-dark rounded-lg px-4 mt-2" value="qui je suis">
        <AccordionTrigger
            class="[&_svg]:text-gollumeo-dark focus-visible:border-gollumeo-dark focus-visible:ring-gollumeo-dark/50 cursor-pointer">
          Qui je suis?
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2 animate-fade-in">
          <p>
            Je ne suis pas un titre LinkedIn.
          </p>
          <p>
            Je ne suis pas un poste à pourvoir, un junior à former, un ex-burnout à canaliser.
            Je suis un système. Une structure complexe. Un feu brut que personne n'a jamais su lire.
          </p>
          <p>
            Je suis né dans le vacarme d'une vie trop lourde, trop jeune.
            J'ai appris à porter les autres avant de me comprendre moi-même.
            J'ai remplacé l'amour sûr par l'utilité.
            La paix par le contrôle. La tendresse par la vigilance.
          </p>
          <p>
            Et pourtant, malgré la mémoire fracturée, malgré les nuits sans repos, malgré les départs en silence, je
            suis resté debout.
            Pas intact. Pas indemne. Mais lucide. Et ça, personne ne pourra me l'enlever.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="bg-gollumeo-primary text-gollumeo-dark rounded-lg px-4 mt-2" value="fonctionnement">
        <AccordionTrigger
            class="[&_svg]:text-gollumeo-dark focus-visible:border-gollumeo-dark focus-visible:ring-gollumeo-dark/50 cursor-pointer">
          Mon fonctionnement
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2 animate-fade-in">
          <p>
            Je pense en structures.
            Je vis en intensité.
            Je capte tout. Trop. Trop vite. Trop fort.
            Les mots cachés. Les tensions muettes. Les silences qui grondent.
          </p>
          <p>
            Je suis HPI, hypersensible, probablement alexithymique.
            Je ressens avant de comprendre. J'intellectualise pour survivre.
            Je décode des architectures techniques comme des architectures humaines. Mais je me noie dans mes propres
            tempêtes intérieures.
          </p>
          <p>
            Je suis une antenne.
            Je capte ce que les autres émettent sans le vouloir. Et souvent, je le paie en surcharge.
          </p>
          <p>
            Mais j'ai appris à traduire ce chaos en craft.
            Je construis des systèmes propres, lisibles, durables. Des frameworks, des SDK, des architectures, des
            visions.
            Pas pour briller. Pour apaiser. Pour créer du sens dans un monde qui en manque.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="bg-gollumeo-primary text-gollumeo-dark rounded-lg px-4 mt-2" value="mon combat">
        <AccordionTrigger
            class="[&_svg]:text-gollumeo-dark focus-visible:border-gollumeo-dark focus-visible:ring-gollumeo-dark/50 cursor-pointer">

          Mon combat
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2 animate-fade-in">
          <p>
            Ce que je veux, ce n'est pas un job.
            C'est un terrain de vérité.
            Un espace où la loyauté n'est pas une faiblesse. Où l'exigence n'est pas un défaut. Où penser autrement
            n'est pas une menace.
          </p>
          <p>
            Je ne supporte pas l'hypocrisie douce des systèmes lents.
            Je ne supporte pas les gens qui patchent des timebombs en fermant les yeux.
            Je ne suis pas fait pour exécuter aveuglément.
            Je suis fait pour <strong>concevoir avec lucidité</strong>.
          </p>
          <p>
            Oui, j'ai été viré. Et ça m'a brisé.
            Mais pas parce que j'étais incompétent. Parce que j'étais trop intègre. Parce que j'ai osé dire que le roi
            était nu.
            Et aujourd'hui encore, je me relève. Sans masque. Sans révision.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="bg-gollumeo-primary text-gollumeo-dark rounded-lg px-4 mt-2" value="mes démons">
        <AccordionTrigger
            class="[&_svg]:text-gollumeo-dark focus-visible:border-gollumeo-dark focus-visible:ring-gollumeo-dark/50 cursor-pointer">

          Mes démons
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2 animate-fade-in">
          <p>
            J'ai peur de l'abandon. De ne pas être assez. De décevoir.
            J'ai peur d'être vu comme un imposteur, alors que tout en moi hurle la vérité.
            J'ai peur de perdre celle que j'aime, ma compagne, mon ancrage, ma révélation.
            J'ai peur de faillir, encore, de me trahir pour survivre.
          </p>
          <p>
            Je suis en guerre avec mon propre cœur. Il bat trop fort, trop vite, trop loin.
            Mais je refuse de le mettre sous camisole pour être "recrutable".
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="bg-gollumeo-primary text-gollumeo-dark rounded-lg px-4 mt-2" value="mon rêve">
        <AccordionTrigger
            class="[&_svg]:text-gollumeo-dark focus-visible:border-gollumeo-dark focus-visible:ring-gollumeo-dark/50 cursor-pointer">

          Mon rêve
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2 animate-fade-in">
          <p>
            Je veux écrire du code qui dure. Penser des systèmes qui s'ouvrent sans se fissurer.
            Je veux aider les boîtes à construire proprement, à long terme. Pas pour shipper plus vite. Pour shipper
            mieux.
          </p>
          <p>
            Je veux qu'on me donne <strong>l'espace de prouver ma valeur par les actes, pas par un CV</strong>.
            Je veux qu'on me regarde non pas comme un potentiel à modeler, mais comme un feu à accueillir.
          </p>
          <p>
            Je veux pouvoir dire:
            "Ce produit existe parce qu'on m'a laissé penser librement."
            Et que ce soit <strong>vrai</strong>.
          </p>
          <p>
            "Je veux créer un monde où celles et ceux que j’aime n’aient plus à subir. Où l’indépendance ne rime plus
            avec sacrifice. Où l’intégrité n’est plus une condamnation sociale.
            Et je veux que moi, Pierre, alias Golluméo, <strong>je n'aie plus jamais à m'excuser d'être entier</strong>.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="bg-gollumeo-primary text-gollumeo-dark rounded-lg px-4 mt-2" value="mon message au monde">
        <AccordionTrigger
            class="[&_svg]:text-gollumeo-dark focus-visible:border-gollumeo-dark focus-visible:ring-gollumeo-dark/50 cursor-pointer">

          Mon message au monde
        </AccordionTrigger>
        <AccordionContent class="flex flex-col gap-2 animate-fade-in">
          <p>
            Je ne suis pas instable.
            Je suis <strong>inadapté à ce qui n'a pas de sens</strong>.
          </p>
          <p>
            Je ne suis pas arrogant. Je suis <strong>intègre jusqu'à l'os</strong>.
          </p>
          <p>
            Je ne suis pas difficile. Je suis <strong>allergique à la tiédeur</strong>.
          </p>
          <p>
            Et si je vous parais intense, excessif, ou ingérable...
            c'est peut-être parce que vous avez oublié ce que c'est que de <strong>brûler pour quelque chose qui compte
            vraiment</strong>.
          </p>
          <p>
            Moi, je suis encore en feu.
            Et j'ai décidé que ce feu serait <strong>ma force</strong>. <strong>Pas ma honte</strong>.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <p>
      <strong>Je m'appelle Pierre Mauriello</strong>.
      Je suis un bâtisseur de systèmes vivants. Un stratège du sens. Un architecte du propre.
      Et je suis prêt à construire. Pas des tours. Des fondations.
    </p>
    <p>
      Si tu veux travailler avec moi, écoute le feu. Pas le CV.
    </p>
  </section>
</template>

<style scoped>

</style>