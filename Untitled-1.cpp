#include <iostream>
#include <string>
#include <vector>
#include <cstdlib>
#include <ctime>
#include <limits>

using namespace std;

void calculator() {
    double num1, num2;
    char op;
    cout << "Введите первое число: ";
    cin >> num1;
    cout << "Введите оператор (+, -, *, /): ";
    cin >> op;
    cout << "Введите второе число: ";
    cin >> num2;

    switch (op) {
        case '+':
            cout << "Результат: " << num1 + num2 << endl;
            break;
        case '-':
            cout << "Результат: " << num1 - num2 << endl;
            break;
        case '*':
            cout << "Результат: " << num1 * num2 << endl;
            break;
        case '/':
            if (num2 != 0)
                cout << "Результат: " << num1 / num2 << endl;
            else
                cout << "Ошибка: деление на ноль!" << endl;
            break;
        default:
            cout << "Неверный оператор!" << endl;
            break;
    }
}

void passwordGenerator() {
    string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    int length;
    cout << "Введите длину пароля: ";
    cin >> length;

    srand(time(0));
    string password;
    for (int i = 0; i < length; ++i) {
        password += chars[rand() % chars.length()];
    }

    cout << "Ваш пароль: " << password << endl;
}

void ticTacToe() {
    char board[3][3] = {{'1', '2', '3'}, {'4', '5', '6'}, {'7', '8', '9'}};
    char player = 'X';
    int choice;
    int turn = 0;
    bool gameOver = false;

    auto displayBoard = [&]() {
        cout << "Текущее состояние доски:\n";
        for (int i = 0; i < 3; ++i) {
            for (int j = 0; j < 3; ++j) {
                cout << board[i][j] << " ";
            }
            cout << endl;
        }
    };

    auto checkWin = [&](char player) -> bool {
        for (int i = 0; i < 3; ++i) {
            if (board[i][0] == player && board[i][1] == player && board[i][2] == player) return true;
            if (board[0][i] == player && board[1][i] == player && board[2][i] == player) return true;
        }
        // Проверка диагоналей
        if (board[0][0] == player && board[1][1] == player && board[2][2] == player) return true;
        if (board[0][2] == player && board[1][1] == player && board[2][0] == player) return true;
        return false;
    };

    while (!gameOver && turn < 9) {
        displayBoard();
        cout << "Игрок " << player << ", введите номер клетки: ";
        cin >> choice;

        if (choice < 1 || choice > 9) {
            cout << "Неверный номер клетки! Попробуйте снова.\n";
            continue;
        }

        int row = (choice - 1) / 3;
        int col = (choice - 1) % 3;

        if (board[row][col] != 'X' && board[row][col] != 'O') {
            board[row][col] = player;
            turn++;

            // Проверка победы
            if (checkWin(player)) {
                displayBoard();
                cout << "Игрок " << player << " победил!\n";
                gameOver = true;
            }

            // Смена игрока
            player = (player == 'X') ? 'O' : 'X';
        } else {
            cout << "Клетка уже занята! Попробуйте снова.\n";
        }
    }

    // Если ничья
    if (!gameOver && turn == 9) {
        displayBoard();
        cout << "Ничья!\n";
    }
}

void taskScheduler() {
    vector<string> tasks;
    string task;
    while (true) {
        cout << "Введите задачу (или 'выход' для завершения): ";
        getline(cin, task);
        if (task == "выход") {
            break;
        }
        tasks.push_back(task);
    }

    cout << "Ваши задачи:\n";
    for (const auto& t : tasks) {
        cout << "- " << t << endl;
    }
}

void encryptionSystem() {
    string text;
    int shift;
    cout << "Введите текст для шифрования: ";
    getline(cin, text);
    cout << "Введите сдвиг: ";
    cin >> shift;

    string encryptedText;
    for (char c : text) {
        if (isalpha(c)) {
            char base = isupper(c) ? 'A' : 'a';
            encryptedText += (c - base + shift) % 26 + base;
        } else {
            encryptedText += c;
        }
    }

    cout << "Зашифрованный текст: " << encryptedText << endl;
}

void showMenu() {
    cout << "=== Мультифункциональное приложение ===\n";
    cout << "1. Калькулятор\n";
    cout << "2. Генератор паролей\n";
    cout << "3. Крестики-нолики\n";
    cout << "4. Планировщик задач\n";
    cout << "5. Система шифрования\n";
    cout << "6. Выход\n";
    cout << "Выберите опцию: ";
}

int main() {
    int choice;
    do {
        showMenu();
        cin >> choice;
        cin.ignore();

        switch (choice) {
            case 1:
                calculator();
                break;
            case 2:
                passwordGenerator();
                break;
            case 3:
                ticTacToe();
                break;
            case 4:
                taskScheduler();
                break;
            case 5:
                encryptionSystem();
                break;
            case 6:
                cout << "Выход из программы...\n";
                break;
            default:
                cout << "Неверный выбор! Попробуйте снова.\n";
                break;
        }

        system("pause");
        system("cls");
    } while (choice != 6);

    return 0;
}