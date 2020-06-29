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

> Use this section to list the key supporting libraries and their role in the project.

|   Library    | Description                                |
| :----------: | :----------------------------------------- |
|    React     | _Powers the application functionality/environment_ |
| React Router | _Allows application to be navigable without having to refresh the page _ |


<br>

#### MVP Components

> Use this section to define your React components and the data architecture of your app.

```
src
|__ data/
      |__ affirms.json
      |__ colors.json
|__ components
      |__ App.js
      |__ Nav.js
      |__ Dashboard.js
      |__ Background.js
      |__ Affirm.js
      |__ Footer.js
```

<br>

#### MVP Breakdown

> Use this section to go into further depth regarding every component, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | hooks | Description                                |
| :----------: | :--------: | :---: | :---: | :---: | :----------------------------------------- |
|    App.js    | functional |   y   |   n   |   y   | _API call will be access and props declared_ |
|  Navigation  |   class    |   n   |   n   |   n   | _Renders the nav bar_ |
|  Dashboard   | functional |   y   |   y   |   y   | _All tools will live in this component_ |
|  Background  | functional |   y   |   y   |   y   | _Controls the background change_ |
|    Affirm    | functional |   y   |   y   |   y   | _where affirmation generator will lives_ |
|    Footer    |   class    |   n   |   n   |   n   | _Renders the footer_ |

<br>

#### MVP Timeframes

> Use this section to estimate the time necessary to build out each of the components you've described above. 
>
> Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe.

| Task             | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Access API       |    H     |     1.5 hrs      |     x hrs     |     TBD     |
| Create seed data |    H     |     4 hrs      |     x hrs     |     TBD     |
| Randomize seed data  |    H     |     4 hrs      |      x hrs     |     TBD     |
| Build out components      |    M     |     5 hrs      |     x hrs     |     TBD     |
| Sync seed data with onload    |   M    |     3 hrs      |      x hrs     |     TBD     |
| TOTAL            |          |     17.5 hrs      |      x hrs     |     TBD     |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

- _Use storybook to style the application_
- _Add in another API as another function_
- _Access Spotify API to play background music_

<br>

***

## Project Delivery

> The Project Delivery section should be completed as your work on your project.
> TBD

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
> TBD

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.
- Figure out how to use color API
