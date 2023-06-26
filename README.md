# Example of using mTLS

This project aims to show in practice the use of mTLS.

## About mTLS

> mTLS ensures that the parties at either end of a network connection are who they claim to be by verifying that they both have the correct private key.

For more information: [What is mutual TLS](https://www.cloudflare.com/en-us/learning/access-management/what-is-mutual-tls/)

![TLS VS mTLS](https://github.com/leobaiano/mTLS-experiment/assets/957257/2a30b9cc-f537-494f-bbe8-0f92b0e0c45e)


## How to use this repository

1. Create a host pointing to 127.0.0.1
2. In your preferred API Client (postman, insomnia...) create a GET request to the host created in step 1
3. In the project you will find the client certificate, you need to add them to your API Client. You will also find an invalid client certificate, that is, generated with a CA different from the one required by the server.

If everything went well in the settings, you can test requests made without any certificate, requests with an invalid certificate and requests with a valid certificate. Follow the timeline of each request to see the behavior and how the validations are done.
