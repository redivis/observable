import redivis
import pandas as pd
import sys

organizationIdentifier='demo'
datasetIdentifier='ghcn_daily_weather_data:7br5:v1_1'
stationsTableIdentifier='stations:g2q3'

redivisStationsTable = redivis.organization(organizationIdentifier).dataset(datasetIdentifier).table(stationsTableIdentifier)

df = redivisStationsTable.to_pandas_dataframe(max_results=10000)

df.to_json(sys.stdout, 'records')