import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AppContainer from '../../components/ui/AppContainer';
import ScreenWrapper from '../../components/ui/ScreenWrapper';
import SecondaryButton from '../../components/ui/SecondaryButton';
import Divider from '../../components/ui/Divider';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

interface ProfileScreenProps {
  user?: {
    name: string;
    email: string;
    phone?: string;
    role: 'buyer' | 'seller' | 'admin';
  };
  onEditProfile?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
}

export default function ProfileScreen({
  user = {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    role: 'buyer',
  },
  onEditProfile,
  onSettings,
  onLogout,
}: ProfileScreenProps) {
  const menuItems = [
    { label: 'My Orders', icon: '📦', onPress: () => {} },
    { label: 'Saved Services', icon: '⭐', onPress: () => {} },
    { label: 'Settings', icon: '⚙️', onPress: onSettings },
    { label: 'Help & Support', icon: '❓', onPress: () => {} },
    { label: 'About', icon: 'ℹ️', onPress: () => {} },
  ];

  return (
    <AppContainer>
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.profileHeader}>
            <View style={styles.avatarContainer}>
              <Text style={styles.avatar}>👤</Text>
            </View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            {user.phone && <Text style={styles.phone}>{user.phone}</Text>}
            <View style={styles.roleBadge}>
              <Text style={styles.roleText}>
                {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <SecondaryButton
                title="Edit Profile"
                onPress={onEditProfile || (() => {})}
                fullWidth={true}
              />
            </View>
          </View>
          <Divider />
          <View style={styles.menuSection}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={item.onPress}
                activeOpacity={0.7}
              >
                <Text style={styles.menuIcon}>{item.icon}</Text>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Text style={styles.menuArrow}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.logoutContainer}>
            <SecondaryButton
              title="Logout"
              onPress={onLogout || (() => {})}
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
    padding: spacing.screenPadding,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    fontSize: 48,
  },
  name: {
    ...typography.h2,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  email: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  phone: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  roleBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: 20,
    marginBottom: spacing.lg,
  },
  roleText: {
    ...typography.bodySmall,
    color: colors.text,
    fontWeight: '600',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 200,
  },
  menuSection: {
    marginVertical: spacing.lg,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.surface,
    borderRadius: 12,
    marginBottom: spacing.sm,
  },
  menuIcon: {
    fontSize: 24,
    marginRight: spacing.md,
  },
  menuLabel: {
    ...typography.body,
    color: colors.text,
    flex: 1,
  },
  menuArrow: {
    ...typography.body,
    color: colors.textSecondary,
  },
  logoutContainer: {
    marginTop: spacing.xl,
  },
});
