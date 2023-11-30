import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIAT4AZLR4FLHSFSRQO",
    secretAccessKey: "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",
  },
});

async function getObjectURL(key) {
  const command = new GetObjectCommand({
    Bucket: "private-bucket-hahahamid",
    Key: key,
  });

  const url = await getSignedUrl(s3Client, command);
  return url;
}

async function init() {
  console.log("url for this file -> ", await getObjectURL("profile image.png"));
}

init();
