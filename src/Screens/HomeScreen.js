import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {icons, DIM, Colors} from '../Constants/Utility';
import {DATA} from '../Constants/Data';

const HomeScreen = () => {
  const CardUi = ({item}) => {
    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.cardContent}>
          <Text style={styles.jobTitle}>{item.title}</Text>
          <Text style={styles.jobType}>{item.company}</Text>

          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            {item.fulltime && (
              <View
                style={[
                  styles.jobTypeContainer,
                  {backgroundColor: Colors.onlineBackgroundColor},
                ]}>
                <Text style={[styles.jobTypeText]}>full time</Text>
              </View>
            )}

            <View
              style={[
                styles.jobTypeContainer,
                {backgroundColor: Colors.salaryBgColor},
              ]}>
              <Text
                style={[styles.jobTypeText, {color: Colors.salaryTextColor}]}>
                {item.salary}
              </Text>
            </View>
          </View>
          <Text style={styles.jobFeedContainer}>posted 3 days ago</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <Image
              source={icons.save}
              style={styles.searchIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.jobFeedContainer}>
            <Image
              source={icons.restrict}
              style={styles.searchIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <TouchableOpacity>
              <Image
                source={icons.logoindeed}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.logoflower}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity>
              <Image
                source={icons.message}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={icons.bell}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                source={icons.hamburger}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <View style={styles.searchContainer}>
        <View style={styles.inputContainer}>
          <Image
            source={icons.search}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="job title, keywords, or company"
            placeholderTextColor="#888"
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={icons.location}
            style={styles.locationIcon}
            resizeMode="contain"
          />
          <TextInput
            style={styles.input}
            placeholder="kerala"
            placeholderTextColor="#888"
          />
        </View>
      </View>

      <View style={styles.jobFeedContainer}>
        <Text style={styles.jobFeedTitle}>job feed</Text>
        <Text style={styles.jobFeedSubtitle}>
          Jobs based on your Activity on indeed
        </Text>
      </View>

      <View style={styles.jobFeedContainer}>
        <FlatList
          data={DATA}
          renderItem={CardUi}
          keyExtractor={Item => Item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: DIM.deviceWidth * 0.04,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: DIM.deviceHeight * 0.13,
    height: DIM.deviceHeight * 0.1,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  icon: {
    width: DIM.deviceHeight * 0.03,
    height: DIM.deviceHeight * 0.1,
  },
  searchContainer: {
    marginTop: DIM.deviceHeight * 0.02,
  },
  inputContainer: {
    borderWidth: 1,

    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: DIM.deviceWidth * 0.02,
    borderColor: Colors.borderColor,
  },
  searchIcon: {
    width: DIM.deviceHeight * 0.03,
  },
  locationIcon: {
    width: DIM.deviceHeight * 0.03,
  },
  input: {
    paddingLeft: DIM.deviceWidth * 0.02,
    fontSize: DIM.deviceFont * 16,
    flex: 1,
  },
  jobFeedContainer: {
    marginTop: DIM.deviceHeight * 0.02,
  },
  jobFeedTitle: {
    color: Colors.textColor,
    fontSize: DIM.deviceFont * 25,
    fontWeight: '600',
  },
  jobFeedSubtitle: {
    marginTop: DIM.deviceHeight * 0.01,
    fontSize: DIM.deviceFont * 16,
    color: Colors.placeholderColor,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
    marginVertical: DIM.deviceHeight * 0.02,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  cardContent: {
    flex: 0.9,
  },
  jobTitle: {
    color: Colors.textColor,
    fontSize: DIM.deviceFont * 23,
    fontWeight: '600',
  },
  jobType: {
    marginTop: DIM.deviceHeight * 0.01,
    fontSize: DIM.deviceFont * 16,
  },
  jobTypeContainer: {
    padding: 10,
    maxWidth: '30%',
    marginTop: DIM.deviceHeight * 0.01,
    borderRadius: 5,
  },
  jobTypeText: {
    color: Colors.onlineTextColor,
    fontSize: DIM.deviceFont * 16,
  },
  iconContainer: {
    flex: 0.1,
    alignItems: 'flex-end',
  },
});

export default HomeScreen;
