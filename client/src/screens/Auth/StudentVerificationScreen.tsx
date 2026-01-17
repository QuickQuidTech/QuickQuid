import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import PrimaryButton from '../../components/ui/PrimaryButton';
import TextInputField from '../../components/ui/TextInputField';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type RootStackParamList = {
  StudentVerification: undefined;
  MainTabs: undefined;
};

type StudentVerificationScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'StudentVerification'
>;

export default function StudentVerificationScreen() {
  const navigation = useNavigation<StudentVerificationScreenNavigationProp>();
  const [university, setUniversity] = useState('');
  const [studentId, setStudentId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (university && studentId && email) {
      // In a real app, would submit verification data here
      navigation.navigate('MainTabs');
    }
  };

  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.title}>Student Verification</Text>
          <Text style={styles.info}>
            Please provide your student details for verification
          </Text>
          <TextInputField
            label="University/College Name"
            placeholder="Enter your university name"
            value={university}
            onChangeText={setUniversity}
          />
          <TextInputField
            label="Student ID"
            placeholder="Enter your student ID"
            value={studentId}
            onChangeText={setStudentId}
          />
          <TextInputField
            label="University Email"
            placeholder="student@university.edu"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.uploadSection}>
            <Text style={styles.label}>Student ID Card (Optional)</Text>
            <TouchableOpacity style={styles.uploadButton} activeOpacity={0.7}>
              <Text style={styles.uploadIcon}>📎</Text>
              <Text style={styles.uploadText}>Tap to upload ID card</Text>
            </TouchableOpacity>
            <Text style={styles.uploadNote}>
              Upload a clear photo of your student ID card
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              title="Submit for Verification"
              onPress={handleSubmit}
              disabled={!university || !studentId || !email}
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
    padding: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  info: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  uploadSection: {
    marginBottom: spacing.xl,
  },
  label: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  uploadButton: {
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    marginBottom: spacing.xs,
  },
  uploadIcon: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  uploadText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  uploadNote: {
    ...typography.caption,
    color: colors.textTertiary,
  },
  buttonContainer: {
    marginTop: spacing.lg,
  },
});
