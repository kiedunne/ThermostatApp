My first program using Javascript 

# Thermostat

You will TDD the logic needed to model a simple thermostat, and creating a UI web app to communicate with it .

### Specification:

* Thermostat starts at 20 degrees // done
* You can increase the temperature with an up function //
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees // fail with error if try to decrease below 10
* If power saving mode is on, the maximum temperature is 25 degrees // make a powerSaving mode function (true/false
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is `low-usage`, < 25 is `medium-usage`, anything else is `high-usage`.
* Make it so the text for the current tempersture will change colour depending on the energy usuage level: low-usage will be indicated with green, medium-usage indicated with blue, high-usage indicated with red.

* Use Jasmine to Test-Drive Development of a thermostat
