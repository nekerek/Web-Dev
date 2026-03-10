def swap_case(s):
    res = ""
    for ch in s:
        if 'a' <= ch <= 'z':
            res += chr(ord(ch) - 32)
        elif 'A' <= ch <= 'Z':
            res += chr(ord(ch) + 32)
        else:
            res += ch
    return res


if __name__ == '__main__':
    s = input()
    print(swap_case(s))