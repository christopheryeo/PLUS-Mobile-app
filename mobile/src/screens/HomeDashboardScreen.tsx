import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const HomeDashboardScreen = ({ navigation }: any) => {
    const quickActions = [
        {
            icon: 'route',
            label: 'PLAN\nJOURNEY',
            bg: colors.white,
            screen: 'PlanJourney',
        },
        {
            icon: 'videocam',
            label: 'LIVE\nCCTV',
            bg: colors.white,
            screen: 'CCTVFeed',
        },
        {
            icon: 'calculate',
            label: 'TOLL\nCALC',
            bg: colors.white,
        },
        {
            icon: 'phone',
            label: 'SOS\nEMERGENCY',
            bg: colors.red,
            screen: 'EmergencySOS',
        },
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {/* Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.logo}>PLUS</Text>
                        <Text style={styles.subtitle}>MALAYSIA HIGHWAY AUTHORITY</Text>
                    </View>
                    <Text style={styles.time}>04:52 PM</Text>
                </View>

                {/* Traffic Status */}
                <View style={styles.trafficStatus}>
                    <View style={styles.trafficIndicator}>
                        <View style={styles.greenDot} />
                        <Text style={styles.trafficText}>LIVE TRAFFIC: CLEAR</Text>
                    </View>
                </View>

                {/* Quick Actions Grid */}
                <View style={styles.actionsGrid}>
                    {quickActions.map((action, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.actionCard, { backgroundColor: action.bg }]}
                            onPress={() => action.screen && navigation.navigate(action.screen)}>
                            <Icon
                                name={action.icon}
                                size={40}
                                color={action.bg === colors.red ? colors.white : lightColors.text}
                            />
                            <Text
                                style={[
                                    styles.actionLabel,
                                    action.bg === colors.red && styles.actionLabelWhite,
                                ]}>
                                {action.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* News Section */}
                <View style={styles.newsSection}>
                    <Text style={styles.sectionTitle}>WHAT'S HAPPENING @PLUSTRAФK</Text>

                    <View style={styles.newsCard}>
                        <View style={styles.newsBadge}>
                            <Text style={styles.newsBadgeText}>SMARTLANE</Text>
                        </View>
                        <Text style={styles.newsTime}>10:00 HRS</Text>
                        <Text style={styles.newsTitle}>SMARTLANE ACTIVATION</Text>
                        <Text style={styles.newsDescription}>
                            KM 303.1 KM 329.8 on Selangor Southville City ka Kuala Maktuba.
                            Emergency lane open for use.
                        </Text>
                    </View>

                    <View style={styles.newsCard}>
                        <View style={[styles.newsBadge, styles.newsBadgeAlert]}>
                            <Text style={styles.newsBadgeText}>ALERT</Text>
                        </View>
                        <Text style={styles.newsTime}>10:45 HRS</Text>
                        <Text style={styles.newsTitle}>MAINTENANCE NOTICE</Text>
                        <Text style={styles.newsDescription}>
                            KM 432.5 Toll plaza at KM 12.4 (Elite Highway) Maintenance work in
                            progress. Expect delays.
                        </Text>
                    </View>
                </View>

                {/* Links */}
                <TouchableOpacity style={styles.linkCard}>
                    <Text style={styles.linkText}>VIEW REWARDS CATALOG</Text>
                    <Icon name="chevron-right" size={24} color={lightColors.text} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.linkCard}>
                    <Text style={styles.linkText}>TOUCH 'N GO SERVICES</Text>
                    <Icon name="chevron-right" size={24} color={lightColors.text} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: lightColors.background,
    },
    scrollView: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: spacing.lg,
        paddingTop: spacing.xl + spacing.md,
    },
    logo: {
        fontSize: typography.fontSize['4xl'],
        fontWeight: '800',
        color: colors.primary,
        letterSpacing: -1,
    },
    subtitle: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        letterSpacing: typography.letterSpacing.wide,
        marginTop: spacing.xs,
    },
    time: {
        fontSize: typography.fontSize.sm,
        color: lightColors.text,
        fontWeight: '500',
    },
    trafficStatus: {
        marginHorizontal: spacing.lg,
        marginBottom: spacing.lg,
        padding: spacing.md,
        backgroundColor: colors.primary,
        borderRadius: borderRadius.md,
    },
    trafficIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    greenDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: colors.white,
        marginRight: spacing.sm,
    },
    trafficText: {
        color: colors.white,
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        letterSpacing: typography.letterSpacing.wider,
    },
    actionsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: spacing.lg,
        gap: spacing.md,
    },
    actionCard: {
        width: '48%',
        aspectRatio: 1,
        borderRadius: borderRadius.md,
        padding: spacing.lg,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: lightColors.text,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    actionLabel: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        textAlign: 'center',
        marginTop: spacing.md,
        letterSpacing: typography.letterSpacing.wide,
    },
    actionLabelWhite: {
        color: colors.white,
    },
    newsSection: {
        paddingHorizontal: spacing.lg,
        paddingTop: spacing.xl,
    },
    sectionTitle: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: lightColors.text,
        letterSpacing: typography.letterSpacing.wider,
        marginBottom: spacing.md,
    },
    newsCard: {
        backgroundColor: colors.white,
        padding: spacing.md,
        borderRadius: borderRadius.md,
        marginBottom: spacing.md,
    },
    newsBadge: {
        alignSelf: 'flex-start',
        backgroundColor: lightColors.text,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.sm,
        marginBottom: spacing.sm,
    },
    newsBadgeAlert: {
        backgroundColor: colors.yellow,
    },
    newsBadgeText: {
        color: colors.white,
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        letterSpacing: typography.letterSpacing.wide,
    },
    newsTime: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        marginBottom: spacing.xs,
    },
    newsTitle: {
        fontSize: typography.fontSize.base,
        fontWeight: '700',
        color: lightColors.text,
        marginBottom: spacing.xs,
    },
    newsDescription: {
        fontSize: typography.fontSize.sm,
        color: lightColors.textSecondary,
        lineHeight: typography.fontSize.base * typography.lineHeight.normal,
    },
    linkCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing.lg,
        marginBottom: spacing.md,
        padding: spacing.md,
        backgroundColor: colors.white,
        borderRadius: borderRadius.md,
    },
    linkText: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: lightColors.text,
        letterSpacing: typography.letterSpacing.wide,
    },
});
