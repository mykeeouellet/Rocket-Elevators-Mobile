# Rocket Elevator Mobile APP
### Codeboxx Week 13

## The Goal
A Mobile application that allows teams in the field to interact with the Rocket Elevators information system, it can only be accessed by employees. The development of the native app is possible thanks to the implementation of the API in REST in week 8. Some API contact points will feed the API with data.

## Installation

Once the repository has been cloned, open the project and start compiling it using this command

```
npm start
```
Since our app is made using React_native and Expo, this will open a new tab in your browser.
There you'll be able to open the project directly on an IOS device using the QR code at the bottom
left of the screen.

If you have the expo.io app on your smartphone, you can also see the project since it's been published there. ``` https://expo.io/@mykeeouellet/rocketelevatormobileapp-mykee ```

## Usage

The first screen that will be displayed is the login screen. The app consists of basically 3 screens (Login, Home and Elevator details). Pressing the login button will bring you to the home screen where all the elevators that are currently inactive will be displayed in a Flatlist. Then , by clicking any of these "Cards", a new screen will be displayed but now showing specific information about the selected elevator.

## Additional Informations

For the queries, i'm using my REST api URL. ``` https://rocketapimykee.azurewebsites.net/api ```

There different endpoints are being called. For example, the home screen displays all the elevators currently out of service. This can either be of status "inactive" or "intervention". To make this query i'm using the endpoint ``` https://rocketapimykee.azurewebsites.net/api/elevators/unavailable ```
Various endpoints could be added to the mobile app to implement more features in the future.

## Things to implement

=> Correct authentication and access.(Login)

=> Change the status of a specific elevator using the PUT method.(Elevator Details)

=> Change the Elevator Details screen to a modal on the home screen


