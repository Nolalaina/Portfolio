# Portfolio de Nolalaina Rakotovahiny

## Structure des fichiers

```
portfolio/
├── index.html          Le contenu de la page (textes, sections, cartes de projets)
├── css/
│   └── style.css       Tout le design (couleurs, mise en page, adaptation mobile)
├── js/
│   └── script.js       Les interactions (menu actif, fenêtre des projets, formulaire)
└── images/
    ├── photo-nolalaina.jpg
    └── <projet>-1.jpg ... <projet>-7.jpg   (7 captures par projet)
```

## Où modifier quoi

| Je veux changer...                    | Fichier                                   |
|---------------------------------------|-------------------------------------------|
| un texte, une compétence, un projet   | `index.html`                              |
| les couleurs                          | `css/style.css`, bloc `:root` tout en haut |
| ma photo ou une capture               | remplacer le fichier dans `images/` (même nom) |
| ma clé du formulaire de contact       | `js/script.js`, ligne `var WEB3FORMS_KEY=''` |

## Voir le site sur mon ordinateur

Double-clique sur `index.html`, ou dans VS Code utilise l'extension **Live Server**.

## Recevoir les messages des recruteurs

1. Va sur **web3forms.com**, entre `hnolalaina@gmail.com`, récupère la clé reçue par e-mail.
2. Ouvre `js/script.js`, trouve `var WEB3FORMS_KEY='';` et colle ta clé entre les guillemets.
3. Sans clé, le formulaire propose « Ouvrir Gmail », « Application e-mail » et « Copier le message ».

## Mettre en ligne

**Important : garde les dossiers `css`, `js` et `images` à côté de `index.html`.**

- **Vercel** : envoie tout le contenu de ce dossier dans un dépôt GitHub (sur github.com : « Add file » puis « Upload files », et glisse `index.html` ET les trois dossiers). Sur vercel.com : Add New, Project, Import, Framework Preset « Other », Deploy.
- **Depuis le terminal** : dans ce dossier, lance `npx vercel --prod`.
- **GitHub Pages** : même envoi dans un dépôt `nolalaina.github.io`, puis Settings, Pages, branche `main`, dossier `/ (root)`.
