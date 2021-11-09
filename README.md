# opinion-miner

- Project requires Google Cloud's Natural Language API set up as a service account.
- You must place generated json file with private key to the project's rood directory (gitignore line was added to not track this file)
    - https://cloud.google.com/docs/authentication/production#passing_code
    - The following lines of code in sentimentController.js file must be modified to match with the service account.
        - // const projectId = 'project-id'
        - // const keyFilename = '/path/to/keyfile.json'