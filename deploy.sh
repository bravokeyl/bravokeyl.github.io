#! /bin/bash
echo "Generating public files with Hexo"
hexo generate
echo "Sync---ing the generated directory with AWS S3"
aws s3 sync public/ s3://bravokeyl.com --profile luser
