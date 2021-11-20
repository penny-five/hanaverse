# Hanaverse

Junction Hackathon 2021 competition entry for "The Smartest Water Experience" challenge by Oras.

## What is this about?

Conservation of water is one of the most urgent issues the modern world is facing right now. As there has been a rapid increase in water consumption, it is more important than ever to participate. In other words, we need to come up with revolutionary strategies and innovations that will help in conserving our precious source of life.

Our way to take part in solving this problem is to visualize it and give you the information and insights you need to make the most out of your life.

We call this innovation the Hanaverse. Hanaverse begins with HanaWorld, a next generation water conservation application for children.

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
      "name": "Kwork",
      "ageDays": 8,
      "color": "RED"
    },
    {
      "name": "Zark",
      "ageDays": 8,
      "color": "RED"
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
