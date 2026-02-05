import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header } from '../components/Header';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

export const RewardsCatalogueScreen = ({ navigation }: any) => {
    const rewards = [
        {
            title: 'TERRA CHARGER BUNDLE',
            description: 'Terra 184 Charger  + Orange 2 Cable with Carpet',
            points: 340,
            tag: 'Electronics',
            featured: true,
        },
        {
            title: 'FAMILY RAMEN SET',
            description: 'Premium Ramen Set  + 2 Bowls + 2 Pairs of Chopsticks',
            points: 220,
            tag: 'Family Pack',
        },
        {
            title: 'DEPARTURE KIT',
            description: 'Travel essential kit for weekend trips',
            points: 150,
            tag: null,
        },
    ];

    return (
        <View style={styles.container}>
            <Header
                title="SMART CARDS"
                onBackPress={() => navigation.goBack()}
                rightComponent={
                    <TouchableOpacity>
                        <Icon name="more-vert" size={24} color={lightColors.text} />
                    </TouchableOpacity>
                }
            />

            <ScrollView style={styles.scrollView}>
                {/* Points Balance */}
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceLabel}>AVAILABLE CREDITS</Text>
                    <Text style={styles.balanceAmount}>1,182</Text>
                    <Text style={styles.balanceSubtext}>
                        PLUS TOUCH 'N GO BASE REWARD PLAN
                    </Text>
                    <TouchableOpacity style={styles.addButton}>
                        <Icon name="add" size={20} color={colors.primary} />
                        <Text style={styles.addButtonText}>ADD CREDITS</Text>
                    </TouchableOpacity>
                </View>

                {/* Section Header */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>CURATED</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>VIEW ALL (8)</Text>
                    </TouchableOpacity>
                </View>

                {/* Rewards List */}
                {rewards.map((reward, index) => (
                    <View key={index} style={styles.rewardCard}>
                        {reward.tag && (
                            <View style={styles.tagContainer}>
                                <Text style={styles.tagText}>{reward.tag}</Text>
                            </View>
                        )}
                        <View style={styles.rewardImage}>
                            <Icon name="card-giftcard" size={48} color={lightColors.border} />
                        </View>
                        <Text style={styles.rewardTitle}>{reward.title}</Text>
                        <Text style={styles.rewardDescription}>{reward.description}</Text>
                        <TouchableOpacity
                            style={[
                                styles.rewardButton,
                                reward.featured && styles.rewardButtonFeatured,
                            ]}>
                            <Text
                                style={[
                                    styles.rewardButtonText,
                                    reward.featured && styles.rewardButtonTextFeatured,
                                ]}>
                                {reward.featured ? 'BIG ORDER' : 'CLAIM OFFER'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
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
    balanceContainer: {
        padding: spacing.lg,
        backgroundColor: colors.white,
        marginBottom: spacing.md,
    },
    balanceLabel: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        letterSpacing: typography.letterSpacing.wide,
        marginBottom: spacing.xs,
    },
    balanceAmount: {
        fontSize: typography.fontSize['5xl'],
        fontWeight: '800',
        color: lightColors.text,
        marginBottom: spacing.xs,
    },
    balanceSubtext: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
        marginBottom: spacing.md,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: spacing.sm,
        borderWidth: 1,
        borderColor: lightColors.border,
        borderRadius: borderRadius.md,
        gap: spacing.xs,
    },
    addButtonText: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: colors.primary,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
    },
    sectionTitle: {
        fontSize: typography.fontSize.base,
        fontWeight: '800',
        color: lightColors.text,
        fontStyle: 'italic',
    },
    viewAllText: {
        fontSize: typography.fontSize.xs,
        color: lightColors.textSecondary,
    },
    rewardCard: {
        backgroundColor: colors.white,
        marginHorizontal: spacing.lg,
        marginBottom: spacing.md,
        padding: spacing.md,
        borderRadius: borderRadius.md,
    },
    tagContainer: {
        alignSelf: 'flex-start',
        backgroundColor: lightColors.text,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
        borderRadius: borderRadius.sm,
        marginBottom: spacing.sm,
    },
    tagText: {
        color: colors.white,
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
    },
    rewardImage: {
        height: 120,
        backgroundColor: lightColors.background,
        borderRadius: borderRadius.md,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: spacing.md,
    },
    rewardTitle: {
        fontSize: typography.fontSize.base,
        fontWeight: '700',
        color: lightColors.text,
        marginBottom: spacing.xs,
    },
    rewardDescription: {
        fontSize: typography.fontSize.sm,
        color: lightColors.textSecondary,
        marginBottom: spacing.md,
    },
    rewardButton: {
        paddingVertical: spacing.sm,
        borderWidth: 1,
        borderColor: lightColors.border,
        borderRadius: borderRadius.md,
        alignItems: 'center',
    },
    rewardButtonFeatured: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    rewardButtonText: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        color: lightColors.text,
    },
    rewardButtonTextFeatured: {
        color: colors.white,
    },
});
