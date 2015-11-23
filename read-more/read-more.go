package main

import "fmt"
import "log"
import "bufio"
import (
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
		if len(text) > 55 {
			text = text[0:40]
			if strings.LastIndex(text, " ") > -1 {
				text = text[0:strings.LastIndex(text, " ")]
			}
			text += "... <Read More>"
		}
		fmt.Println(text)
	}
}
