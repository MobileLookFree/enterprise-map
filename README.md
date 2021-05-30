# Enterprise map - my master degree project in RTU MIREA

### To run app on your machine install:
1. Dependencies for backend and frontend from their `package.json`
2. `Python 2.7` for TensorFlow proper work
3. `Xcode Command Line Tools` if you are macOS user
4. `MondoDB`

After these steps you should put your's data and private files in `backend/resources` and `backend/private/tokens.js` and initialize Mongo database `enterprise` with collection `enterprise` (array of objects). When Mongo will contains enterprise data, you can run `npm start` for backend and frontend. 

If your enterprise data doesn't have geodata (longitude & latitude), use `geocode.js` script.

### Data examples

#### Enterprise data element:

```
    "id": 100500,
    "fullName": "Fairy House",
    "name": "F.H.",
    "okpo": 100500,
    "regionType": "city",
    "region": "Emerald City, Magic area",
    "street": "Emerald street, h.1",
    "chiefPosition": "Master of the mystic arts",
    "chiefFullName": "Goodwin",
    "chiefPhone": "1-22-33",
    "email": "just_call_goodwin@ec.com",
    "branch": "Mystic arts",
    "status": "Magic",
    "activityType": "Show",
    "subbranch": "Circus",
    "dadata": {
      "source": "",
      "result": "",
      "postal_code": "112233",
      "country": "USA",
      "country_iso_code": "USA",
      "federal_district": "",
      "region_fias_id": "f5807226-8be0-4ea8-91fc-39d053aec1e2",
      "region_kladr_id": "3200000000000",
      "region_iso_code": "",
      "region_with_type": "",
      "region_type": "",
      "region_type_full": "",
      "region": "",
      "area_fias_id": "cb79d8a8-7130-4922-b005-83baf9281ff4",
      "area_kladr_id": "3202600000000",
      "area_with_type": "",
      "area_type": "",
      "area_type_full": "",
      "area": "",
      "city_fias_id": "7c080d22-1f3c-43b0-ba63-1e7de99724c9",
      "city_kladr_id": "3202600100000",
      "city_with_type": "",
      "city_type": "",
      "city_type_full": "",
      "city": "",
      "street_fias_id": "5ba00216-76fd-4637-bd0b-da0c991df5e2",
      "street_kladr_id": "32026001000010000",
      "street_with_type": "",
      "street_type": "",
      "street_type_full": "",
      "street": "",
      "house_fias_id": "06aedf73-00d6-4317-a94b-ec3f983fa837",
      "house_kladr_id": "3202600100001000002",
      "house_type": "",
      "house_type_full": "",
      "house": "1",
      "flat_area": "290.0",
      "fias_id": "06aedf73-00d6-4317-a94b-ec3f983fa837",
      "fias_code": "32026001000000001000002",
      "fias_level": "8",
      "fias_actuality_state": "0",
      "kladr_id": "3202600100001000002",
      "capital_marker": "1",
      "okato": "15256501000",
      "oktmo": "15656101001",
      "tax_office": "3252",
      "tax_office_legal": "3252",
      "timezone": "UTC+3",
      "geo_lat": "38.88864832196788",
      "geo_lon": "-98.88318935202231",
      "qc_complete": 5,
      "qc_house": 2
    }
```