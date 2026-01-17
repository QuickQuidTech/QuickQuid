import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import PrimaryButton from '../../components/ui/PrimaryButton';
import SecondaryButton from '../../components/ui/SecondaryButton';
import { useAppContext } from '../../navigation/RootNavigator';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type RootStackParamList = {
  RoleSelection: undefined;
  StudentVerification: undefined;
  MainTabs: undefined;
};

type RoleSelectionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RoleSelection'
>;

export default function RoleSelectionScreen() {
  const navigation = useNavigation<RoleSelectionScreenNavigationProp>();
  const { setUserRole } = useAppContext();

  const handleRoleSelect = (role: 'buyer' | 'seller') => {
    setUserRole(role);
    if (role === 'buyer') {
      navigation.navigate('StudentVerification');
    } else {
      navigation.navigate('MainTabs');
    }
  };
  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.title}>Choose Your Role</Text>
          <Text style={styles.info}>
            Select how you want to use QuickQUID
          </Text>
          <View style={styles.buttonContainer}>
            <View style={[styles.buttonWrapper, { marginBottom: spacing.md }]}>
              <PrimaryButton
                title="👤 I'm a Buyer"
                onPress={() => handleRoleSelect('buyer')}
                fullWidth={true}
              />
            </View>
            <View style={styles.buttonWrapper}>
              <SecondaryButton
                title="💼 I'm a Seller"
                onPress={() => handleRoleSelect('seller')}
                fullWidth={true}
              />
            </View>
          </View>
          <Text style={styles.note}>
            You can switch roles later in your profile settings
          </Text>
        </View>
      </ScreenWrapper>
    </AppContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  info: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.xxl,
  },
  buttonContainer: {
    marginBottom: spacing.xl,
  },
  buttonWrapper: {
    width: '100%',
  },
  note: {
    ...typography.bodySmall,
    color: colors.textTertiary,
    textAlign: 'center',
  },
});
