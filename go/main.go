package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hello, World!")
	})

	fmt.Println("Listening to http://localhost:8080/")
	http.ListenAndServe(":8080", nil)
	fmt.Println("All going well");
}
