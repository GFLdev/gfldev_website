/*
main.go

Serves the frontend to `/` and handles requests
*/
package main

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

var (
	VERSION = "0.1"
)

// main serves the full website
func main() {
	log.Printf("Initializing web server v%s...", VERSION)

	// Storing environment variables
	env := os.Getenv("ENVIRONMENT")
	envFile := "./.env.dev"
	if env == "prd" {
		log.Printf("Loading production environment")
		envFile = "./env.prd"
	} else {
		log.Printf("Loading development environment")
	}

	// Loading environment variables
	err := godotenv.Load(envFile)
	if err != nil {
		log.Fatalf("Error loading environment variables:\n\t%v", err)
	}
	// port := os.Getenv("SERVER_PORT")
}
