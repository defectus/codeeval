package main
import (
	"fmt"
	"bufio"
	"log"
	"os"
	"strings"
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
		if len(text) > 0 {
			fmt.Println(calculateLcs(strings.Split(text, ";")[0], strings.Split(text, ";")[1]))
		}
	}
}

func calculateLcs(first string, second string) string {
	longest := ""
	for i, runeVal := range first {
		thisPattern := ""
		for j, runeVal2 := range second {
			if runeVal == runeVal2 {
				recur := calculateLcs(first[i + 1:], second[j + 1:])
				if len(longest) < len(recur) + 1 {
					thisPattern += string(runeVal) + recur
					longest = thisPattern
				}
			}
		}
	}
	return longest
}
