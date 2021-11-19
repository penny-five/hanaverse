# Hanaverse

Junction Hackathon 2021 competition entry.

## Commands

### Start dev environment

```sh
docker-compose up --build
```

## Specifications

### API structure

#### Fetch village state

```sh
curl http://hanaverse-api/villages/:id/state
```

##### Schema

```json
{
  "householdSize": 3,
  "villageName": "Hanaville",
  "hananoids": [
    {
      "name": "Kwork"
    },
    {
      "name": "Zark"
    }
  ],
  "hananoidHappiness": 0.2,
  "weatherForecast": "SUNNY",
  "waterConsumptionHistory": [
    {
      "date": "2020-01-01",
      "liters": 54.24
    },
    {
      "date": "2020-01-01",
      "liters": 54.24
    }
  ]
}
```
