{
  isLoading ? (
    <ActivityIndicator size="large" color="#FF0000" />
  ) : (
    <FlatList
      data={data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item, id }) => (
        <View key={id} style={styles.boxList}>
          <Text>Country : {item.Country}</Text>
          <Text>
            NewConfirmed :
            {item.NewConfirmed == 0 ? "unreported" : item.NewConfirmed}
          </Text>
          <Text>
            NewDeaths :{item.NewDeaths == 0 ? "unreported" : item.NewDeaths}
          </Text>
          <Text>
            NewRecovered :{" "}
            {item.NewRecovered == 0 ? "unreported" : item.NewRecovered}
          </Text>
        </View>
      )}
    />
  );
}

<FlatList
  data={datas}
  keyExtractor={({ id }, index) => id}
  renderItem={({ item, id }) => (
    <View key={id} style={styles.boxList}>
      <Text>Country : {item.Country}</Text>
      <Text>
        NewConfirmed :
        {item.NewConfirmed == 0 ? "unreported" : item.NewConfirmed}
      </Text>
      <Text>
        NewDeaths :{item.NewDeaths == 0 ? "unreported" : item.NewDeaths}
      </Text>
      <Text>
        NewRecovered :{" "}
        {item.NewRecovered == 0 ? "unreported" : item.NewRecovered}
      </Text>
    </View>
  )}
/>;
