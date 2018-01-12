#! /bin/bash
echo "Sync---ing the generated directory with AWS S3"
aws s3 sync public/ s3://bravokeyl.com --profile luser
