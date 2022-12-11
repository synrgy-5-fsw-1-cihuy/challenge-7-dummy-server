# Ready to use

Live demo: [https://sparkling-sea-2064.fly.dev/api/cars](https://sparkling-sea-2064.fly.dev/api/cars)

Local demo: [http://localhost:8080/api/cars](http://localhost:8080/api/cars)

## How to use

```bash
git clone https://github.com/synrgy-5-fsw-1-cihuy/

challenge-7-dummy-server

cd challenge-7-dummy-server

npm install

npm run dev
```

## Endpoint

### GET /api/cars

Response

```json
{
  "code": 200,
  "message": "success",
  "data": [
    {
      "id": "6e2bc663-5197-441a-957b-bc75e4a2da7c",
      "plate": "DBH-3491",
      "manufacture": "Ford",
      "model": "F150",
      "image": "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/./images/car01.min.jpg",
      "rentPerDay": 200000,
      "capacity": 2,
      "driverType": 1,
      "description": " Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
      "availableAt": "2022-12-10T21:13:12.971Z",
      "transmission": "Automatic",
      "available": true,
      "type": "Sedan",
      "year": 2022,
      "options": [
        "Cruise Control",
        "Tinted Glass",
        "Tinted Glass",
        "Tinted Glass",
        "AM/FM Stereo"
      ],
      "specs": [
        "Brake assist",
        "Leather-wrapped shift knob",
        "Glove box lamp",
        "Air conditioning w/in-cabin microfilter",
        "Body color folding remote-controlled pwr mirrors",
        "Dual-stage front airbags w/occupant classification system"
      ]
    }
  ]
}
```
