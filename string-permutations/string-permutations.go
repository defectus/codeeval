package main

import (
	"os"
	"strings"
	"bufio"
	"log"
	"fmt"
	"sort"
)

func main() {
	file, err := os.Open(os.Args[1])
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		text := scanner.Text()
		result := permute(strings.Split(text, ""), "", []string{})
		sort.Strings(result)
		fmt.Println(strings.Join(result, ","))
	}
}

func permute(chars []string, resultSoFar string, result []string) []string {
	workingCopy := make([]string, len(chars), (cap(chars) + 1) * 2)
	for _, chunk := range chars {
		copy(workingCopy, chars)
		index := indexOf(workingCopy, chunk)
		charsToPermute := deleteFromSlice(workingCopy, index)
		if len(charsToPermute) == 0 {
			result = append(result, chunk + resultSoFar)
		} else {
			result = permute(charsToPermute, chunk + resultSoFar, result)
		}
	}
	return result
}

func indexOf(where []string, what string) int {
	for i, item := range where {
		if item == what {
			return i
		}
	}
	return -1
}

func deleteFromSlice(where []string, position int) []string {
	copy(where[position:], where[position + 1:])
	where[len(where) - 1] = ""
	where = where[:len(where) - 1]
	return where
}
