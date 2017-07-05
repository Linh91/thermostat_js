# Thermostate

This is a basic thermostate app built using JavaScript.

## How does this Thermostate work

- Thermostate starts at 20 degrees
- You can increase temperature using +
- You can decrease temperature using -
- The minimum temperature is 10 degrees
- If power saving mode is on, maximum temperature is 25 degrees
- If power saving mode is off, minimum temperature is 32 degrees
- Power saving mode is on by default
- You can reset temperature to 20 with reset funcion
- You can view thermostate's current energy usage: <br>
&nbsp; - < 18 is <code>low-usage</code>![#1ca828](https://placehold.it/15/1ca828/000000?text=+)<br>
&nbsp; - < 25 is <code>medium-usage</code>![#000000](https://placehold.it/15/000000/000000?text=+)<br>
&nbsp; - anything else is <code>high-usage</code> ![#f03c15](https://placehold.it/15/f03c15/000000?text=+)<br>

## How to run test

This app used Jasmine as a testing framework.

<code>$ open SpecRunner.html </code>

## How to run app

View app on browser.

<code>$ open thermostat.html</code>

![screen shot 2017-07-05 at 21 28 18](https://user-images.githubusercontent.com/17644847/27883583-ee35451a-61c8-11e7-9d75-96ef1bd0a50a.png)
