import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { lightColors, colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { spacing, borderRadius } from '../theme/spacing';

const N8N_WEBHOOK_URL =
    'https://n8n.srv1154f02.hstgr.cloud/webhook/actioragent-test/chat';

type Message = {
    id: number;
    role: 'user' | 'bot' | 'error';
    text: string;
};

export const ChatbotScreen = ({ navigation }: any) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            role: 'bot',
            text: "Hi! I'm your PLUS Highway assistant. Ask me about routes, tolls, traffic conditions, or anything else!",
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 100);
    }, [messages, isLoading]);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || isLoading) return;

        Keyboard.dismiss();
        const userMsg: Message = { id: Date.now(), role: 'user', text: trimmed };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch(N8N_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: trimmed }),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const data = await res.json();
            const botText =
                data.output ||
                data.response ||
                data.reply ||
                data.text ||
                data.message ||
                JSON.stringify(data);

            setMessages(prev => [
                ...prev,
                { id: Date.now(), role: 'bot', text: botText },
            ]);
        } catch (err: any) {
            setMessages(prev => [
                ...prev,
                {
                    id: Date.now(),
                    role: 'error',
                    text: `Connection error: ${err.message}. Make sure your n8n workflow is active.`,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderMessage = ({ item }: { item: Message }) => {
        if (item.role === 'user') {
            return (
                <View style={[styles.bubble, styles.bubbleUser]}>
                    <Text style={styles.bubbleUserText}>{item.text}</Text>
                </View>
            );
        }

        if (item.role === 'error') {
            return (
                <View style={[styles.bubble, styles.bubbleError]}>
                    <Text style={styles.bubbleErrorText}>{item.text}</Text>
                </View>
            );
        }

        return (
            <View style={[styles.bubble, styles.bubbleBot]}>
                <Text style={styles.botLabel}>PLUS AI</Text>
                <Text style={styles.bubbleBotText}>{item.text}</Text>
            </View>
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={0}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color={lightColors.text} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>PLUS ASSISTANT</Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Messages */}
            <FlatList
                ref={flatListRef}
                data={messages}
                renderItem={renderMessage}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.messagesList}
                style={styles.messagesContainer}
                onContentSizeChange={() =>
                    flatListRef.current?.scrollToEnd({ animated: true })
                }
                ListFooterComponent={
                    isLoading ? (
                        <View style={styles.typingIndicator}>
                            <ActivityIndicator size="small" color={colors.primary} />
                            <Text style={styles.typingText}>PLUS AI is typing...</Text>
                        </View>
                    ) : null
                }
            />

            {/* Input */}
            <View style={styles.inputArea}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ask me anything..."
                    placeholderTextColor={lightColors.textSecondary}
                    value={input}
                    onChangeText={setInput}
                    onSubmitEditing={sendMessage}
                    returnKeyType="send"
                    editable={!isLoading}
                    multiline={false}
                />
                <TouchableOpacity
                    style={[
                        styles.sendButton,
                        (!input.trim() || isLoading) && styles.sendButtonDisabled,
                    ]}
                    onPress={sendMessage}
                    disabled={!input.trim() || isLoading}>
                    <Icon
                        name="send"
                        size={20}
                        color={!input.trim() || isLoading ? colors.gray400 : colors.white}
                    />
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.md,
        paddingTop: spacing.xl + spacing.md,
        backgroundColor: lightColors.background,
        borderBottomWidth: 1,
        borderBottomColor: lightColors.border,
    },
    headerTitle: {
        fontSize: typography.fontSize.sm,
        fontWeight: '700',
        letterSpacing: 2,
        textTransform: 'uppercase' as const,
        color: lightColors.text,
    },
    messagesContainer: {
        flex: 1,
    },
    messagesList: {
        padding: spacing.md,
        paddingBottom: spacing.sm,
    },
    bubble: {
        maxWidth: '80%',
        padding: spacing.md,
        borderRadius: borderRadius.xl,
        marginBottom: spacing.sm,
    },
    bubbleUser: {
        alignSelf: 'flex-end',
        backgroundColor: colors.primary,
        borderBottomRightRadius: borderRadius.sm,
    },
    bubbleUserText: {
        fontSize: typography.fontSize.base,
        color: colors.white,
        lineHeight: typography.fontSize.base * 1.5,
    },
    bubbleBot: {
        alignSelf: 'flex-start',
        backgroundColor: lightColors.background,
        borderBottomLeftRadius: borderRadius.sm,
    },
    botLabel: {
        fontSize: typography.fontSize.xs,
        fontWeight: '700',
        color: colors.primary,
        letterSpacing: 1,
        marginBottom: spacing.xs,
    },
    bubbleBotText: {
        fontSize: typography.fontSize.base,
        color: lightColors.text,
        lineHeight: typography.fontSize.base * 1.5,
    },
    bubbleError: {
        alignSelf: 'center',
        backgroundColor: '#fef2f2',
        borderRadius: borderRadius.md,
    },
    bubbleErrorText: {
        fontSize: typography.fontSize.sm,
        color: colors.red,
        fontWeight: '600',
        textAlign: 'center',
    },
    typingIndicator: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        alignSelf: 'flex-start',
        backgroundColor: lightColors.background,
        borderRadius: borderRadius.xl,
        borderBottomLeftRadius: borderRadius.sm,
        marginBottom: spacing.sm,
    },
    typingText: {
        fontSize: typography.fontSize.sm,
        color: lightColors.textSecondary,
        fontWeight: '600',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: spacing.sm,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm,
        borderTopWidth: 1,
        borderTopColor: lightColors.border,
        backgroundColor: colors.white,
    },
    textInput: {
        flex: 1,
        paddingHorizontal: spacing.md,
        paddingVertical: spacing.sm + 4,
        borderWidth: 1,
        borderColor: lightColors.border,
        borderRadius: borderRadius['2xl'],
        fontSize: typography.fontSize.base,
        color: lightColors.text,
        backgroundColor: colors.white,
    },
    sendButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sendButtonDisabled: {
        backgroundColor: colors.gray200,
    },
});
