import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import PrimaryButton from '../../components/ui/PrimaryButton';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type RootStackParamList = {
  Intro: undefined;
  RoleSelection: undefined;
  MainTabs: undefined;
};

type IntroScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Intro'
>;

export default function IntroScreen() {
  const navigation = useNavigation<IntroScreenNavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate('RoleSelection');
  };
  return (
    <AppContainer>
      <ScreenWrapper scrollable={false}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>💰</Text>
            <Text style={styles.appName}>QuickQUID</Text>
          </View>
          <Text style={styles.tagline}>
            Earn money by offering your skills and services
          </Text>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Get Started"
              onPress={handleGetStarted}
              fullWidth={true}
            />
          </View>
        </View>
      </ScreenWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  logo: {
    fontSize: 96,
    marginBottom: spacing.lg,
  },
  appName: {
    ...typography.h1,
    color: colors.text,
    fontWeight: '700',
  },
  tagline: {
    ...typography.h4,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 300,
  },
});
