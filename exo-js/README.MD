# Exo-1 - Les variables et fonctions

Rendez vous dans le repertoire exo-1 puis dans le fichier `index.html`

## Section 1

* 1.1 : Renseigner la variable `nom` qui contient votre "Doe"
* 1.2 : Déclarer une nouvelle variable `age` qui contient le nombre 32 ans
* 1.3 : Afficher dans la console en utilisant les variables : `john Doe à 32 ans`;

## Section 2

* 2.1 : Nous avons déclaré une fonction `bonjour`, Appeler le fonction pour qu'elle affiche `Bonjour john`.
* 2.2 : Complétez la fonction `identite` pour qu'elle affiche `Bonjour john Doe, tu as 32 ans`.
* 2.3 : Appeler la fonction identite.
* 2.4 : Déclarer une fonction `longeurDuPrenom` qui retourne la longeur du prenom de John Doe.
* 2.5 : Afficher dans la console le resultat de la fonction `longeurDuPrenom`
* 2.6 : [NEW] Déclarer une fonction `calculPrixRemise` qui prend en paramètres 2 nombres : Prix et remise en % (valeur uniquement) et qui retour le prix Remisé (cf formule de calcul dans ficher index.html)
* 2.7 : Afficher dans la console le résultat de la fonction calculPrixRemise avec prix : 100 , remise 20 

## Section 3

* 3.1 : Déclarer une nouvelle fonction `afficheIdentiteEtLongeur` qui prend 3 paramètres : Prenom , Nom, Age. et fait appel aux 2 fonctions `identite` et `longeurDuPrenom` précédement crée.
et affiche dans la console : `Bonjour PRENOM NOM, tu as AGE ans et ton prenom comprend X caractètres`;
* 3.2 : Appeler la fonction `afficheIdentiteEtLongeur` avec en paramètres votre prenom, nom et age.


# Exo-2 - les conditions

Rendez vous dans le repertoire exo-2 puis dans le fichier `index.html`

## Section 1 - Majeur or Not ?

Ajouter une condition pour afficher 'Je suis mineur' si la variable `monAge` est inférieur à 18.

## Section 2 - Feu tricolore

Remplacer `false` par la bonne condition pour traiter le cas où la variable `couleur` est égale à 'orange' ou 'rouge' afin d'indiquer  "je dois m'arrêter" dans ces cas.

## Section 3 - Tarifs SNCF

Compléter les conditions afin d'afficher le bon tarifs en fonction de la valeur de la variable `age`

## Section 4 - Tarifs Forfait de ski tamille

Compléter la fonction monTarifsForfait() pour qu'elle affecte la bonne valeur à la variable `price` suivant le tableau de prix communiqué.
les critères permettrants de trouver le prix sont : Le nombre de Kids (de 0 à 2) , le nombre de Junior (de 0 à 2), le nombre de jour (6 , 7 ou 8).
Affiche 'n/a' si le tarif n'est pas connu.


# Exo-3 - tableaux et boucles

Rendez vous dans le repertoire exo-3 puis dans le fichier `index.html`

## Section 1 - Legumes de la ratatouille

* 1.1 : Ajouter au tableau `ratatouille` (contenant la liste des légumes necessaires à réalisation d'une ratatouille) les 'tomates' pour compléter la liste.

* 1.2 : utiliser une fonction pour affecter la bonne valeur à la variable `nbrLegumes`  en fonction du nombre de légumes présent dans le tableau `ratatouille`.

## Section 2 - Compte a rebours

* 2.1 : A l'aide d'une boucle `for`, réaliser un compter de 0 à 20 qui s'affichera dans la balise html `#countDownto20`

## Section 3 - Blanche neige et les 7 nains

* 3.1 : Nous avons déclaré une variable `nains`, compléter sa définition pour ajouter les 7 nains : Prof, Atchoum, Dormeur, Grincheux, Joyeux, Timide, Simplet.
* 3.2 : En vous inspirant du code JS donnée en exemple , utiliser une boucle `for` pour afficher l'ensemble des nains.

## Section 4 - Top 14.

Nous avons défini une variable `classement` contenant le tableau des équipes du Top 14 classées par ordre alphabétique,
Sans recréer de nouveau tableau, vous devez :

* 4.1 : afficher la liste des équipes avec leur position dans le classement dans la balise `<li>` qui à l'id `s4_generale` (ex: 1. Clermont , 2. Montpellier ...)
* 4.2 : afficher la liste des 3 premieres équipes au classement dans la balise `<li>` qui à l'id `s4_first`
* 4.3 : afficher la liste des 3 dernières équipes au classement dans la balise `<li>` qui à l'id `s4_last`
* 4.4 : Utiliser une fonction pour trier les équipes par ordre alphabétique et les afficher dans la balise <li> qui à l'id `s4_listAlphabetique`

# Exo-4 - jQuery

Rendez vous dans le repertoire exo-4, ouvrez le fichier `index.html` dans votre navigateur, et modifier uniquement le fichier `script.js`
(nous n'avez pas le droit de modifier le fichier `index.html`)

## Section 1 - Les sélecteurs

* 1.1 : Modifier le contenu de la balise `<h2>` avec la chaine "La bonne cible"
* 1.2 : Faites en sorte que le texte "Je suis un paragraphe" s'affiche dans la balise `<p>` qui a l'id `s1_paragraphe`
* 1.3 : Récupérer le contenu de la balise `<p>` qui a l'id `s1_messageToAlert` et déclancher un message avec `alert()`
* 1.4 : ajouter au balises `<div>` avec la class `message` respectivement les classes suivantes  (cf http://getbootstrap.com/components/#alerts ) :
    * `alert-success` pour l'ID `s2_success`
    * `alert-info` pour l'ID `s2_info`
    * `alert-warning` pour l'ID `s2_warning`
    * `alert-danger` pour l'ID `s2_danger`


## Section 2 - les événements utilisateurs

* 2.1 : faites en sorte d'afficher en temps réel dans la balise qui a l'id `s2_destination` le contenu saisi par l'utilisateur dans `s2_source`
* 2.2 : faites en sorte d'afficher en temps réel dans la balise avec a l'id `s2_positifOrNegatif` le contenu choisi par l'utilisateur dans `s2_number`
* 2.3 : faites en sorte d'ajouter les class `label-success` si la valeur choisie est positive, `label-danger` si la valeur choisie est négative, sinon `label-default`.
Plus d'information ici : http://getbootstrap.com/components/#labels /!\ si la balise contient uniquement la class `label` rien ne s'affiche ...
* 2.4 : faites en sorte de controller en temps réel l'année saisie dans l'`<input>` avec l'id `s2_year` ,
    * Si longeur > 4 et Année courante [Aide](http://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript) - Année saisie > 18 (c.a.d l'utilisateur est majeur) alors afficher le champs name.
    * Puis quand le nom est saisie et que sa longeur > 5 caractètres, alors afficher le bouton submit.

## Section 3 - Bataille navale

* 3.1 : faite en sorte qu'au clic sur un des liens la texte du lien 'toucher' soit remplacé pour 'coulé' (uniquement pour l'élément cliqué)

