# find your center

- [Project Planning](#Project-Planning)
  - [Description](#Description)
  - [Wireframes](#Wireframes)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP API](#MVP-API)
    - [MVP Libraries & Dependencies](#MVP-Libraries--Dependencies)
    - [MVP Components](#MVP-Components)
    - [MVP Breakdown](#MVP-Breakdown)
    - [MVP Timeframes](#MVP-Timeframes)
  - [Post-MVP](#Post-MVP)
- [Project Delivery](#Project-Delivery)
  - [Change Log](#Change-Log)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)

## Project Planning
<br>

### Description

_**find your center** is an app designed for helping individuals with anxiety (or those going through stressful moments) by offering different tools that can be used to create a calming environment and lower stress levels. The app will feature a few mediums to achieve this such as, colors and positive affirmations._

<br>

### Wireframes

[Adobe Xd](https://xd.adobe.com/view/34f092e2-98f9-4f13-9ed1-44d54fe0061b-61a3/)

- Desktop Dashboard & Component

[Adobe Xd](https://xd.adobe.com/view/a3c3d6d9-1267-42b9-932d-1e6facb8eeb4-f690/)

- Mobile Dashboard & Component


<br>

### MVP

_The **find your center** MVP is to successfully use an affirmation API to render a random positive affirmation upon clicking a button. Also, I'd like to have background for the app randomize through a palette calming blue/green tones using seed data._

<br>

#### MVP Goals

- _Use React Router to access external API_
- _Render data from API using event listener_
- _Create seed data for color randomizing_
- _Set up randomizing function for color to change upon page load_


<br>

#### MVP API


|    API     | Quality Docs? | Documentation | Sample Query                            |
| :--------: | :-----------: | :------------ | :-------------------------------------- |
| Affirmations API |      yes      | _https://github.com/annthurium/affirmations_ | _https://www.affirmations.dev/_ |

Sample Query Results:

```json
{"affirmation":"It's not a mistake, it's a learning opportunity"}

```

<br>

#### MVP Libraries & Dependencies



|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Powers the application functionality/environment_ |
| React Router | _Allows application to be navigable without having to refresh the page_ |


<br>

#### MVP Components

```
src
|__ data/
      |__ colors.json
|__ components
      |__ App.js
      |__ Nav.js
      |__ Dashboard.js
      |__ Pups.js
      |__ Affirm.js
      |__ Footer.js
```

<br>

#### MVP Breakdown


|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    | functional |   y   |   n   |   y   | _API call will be access and props declared_ |
|  Navigation  |   class    |   n   |   n   |   n   | _Renders the nav bar_ |
|  Dashboard   | functional |   y   |   y   |   y   | _All tools will live in this component_ |
|  Pups  | functional |   y   |   y   |   y   | _where puppy photos will generate_ |
|    Affirm    | functional |   y   |   y   |   y   | _where affirmation generator will lives_ |
|    Footer    |   class    |   n   |   n   |   n   | _Renders the footer_ |

<br>

#### MVP Timeframes



| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Access API       |    H     |     1.5 hrs      |    .30 hrs     |    .30 hrs     |
| Create seed data |    H     |     4 hrs      |     1 hrs     |     1 hrs      |
| Randomize seed data  |    H     |     4 hrs      |      2 hrs     |     2 hrs    |
| Build out components      |    M     |     5 hrs      |     1.5 hrs     |     1.5 hrs     |
| Sync seed data with onload    |   M    |     3 hrs      |      1 hrs     |     1 hrs      |
| TOTAL            |          |     17.5 hrs      |      5.8 hrs     |      5.8 hrs     |

<br>

### Post-MVP


- _Use storybook to style the application_
- _Add in another API as another tool, possibly dog or cute animal images_
- _Access Spotify API to play background music_

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.

## Change Log
> 7.1.2020 Components and breakdown updated, _Background_ became _Pups_

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
> TBD

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
- Issue #1: Using the seed data to become the background color and randomize periodically 
  Resolution #1: It was a simple randomColor function that needed to be created. I used a setInterval timer to allow for the periodic change


