from urllib.request import urlopen
import json
import time

print("Welcome to SatellitePi!")
print("Current version: 0.1")

with urlopen("https://api.n2yo.com/rest/v1/satellite/radiopasses/59051/50.82694/15.521802/600/2/50&apiKey=RT8AVN-NNA7FM-NY9ZKD-52BF") as response:
    body = response.read()

data = json.loads(body)

if (data["info"]["passescount"] > 0):
    today = int(time.time())
    remaining = data["passes"][0]["startUTC"] - today
    seconds = remaining % (24 * 3600)
    hours = seconds // 3600
    seconds %= 3600
    minutes = seconds // 60
    seconds %= 60
    print(f"The next pass of METEOR M2-4 begins in {hours}h:{minutes}m:{seconds}s")
    print("Pausing program until pass begins...")
    time.sleep(remaining)
else:
    print("No upcoming METEOR M2-4 passes in the next 2 days with elevation above 50 degrees. Aborting program.")