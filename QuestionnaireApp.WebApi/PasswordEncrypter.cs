using System;
using System.Security.Cryptography;

namespace QuestionnaireApp.WebApi
{
    public static class PasswordEncrypter
    {
        public static string EncryptPassword(string password)
        {
            var salt = new byte[16];
            using (var provider = new RNGCryptoServiceProvider())
            {
                provider.GetBytes(salt);
            }
            return HashPassword(password, salt);
        }

        public static bool VerifyPassword(string passwordEntered, string savedPasswordHash)
        {
            var savedPasswordHashBytes = Convert.FromBase64String(savedPasswordHash);
            var salt = new byte[16];
            Array.Copy(savedPasswordHashBytes, 0, salt, 0, 16);
            return HashPassword(passwordEntered, salt) == savedPasswordHash;
        }

        private static string HashPassword(string password, byte[] salt)
        {
            byte[] hash;

            using (var deriveBytes = new Rfc2898DeriveBytes(password, salt, 1000))
            {
                hash = deriveBytes.GetBytes(20);
            }

            var hashBytes = new byte[36];
            Array.Copy(salt, 0, hashBytes, 0, 16);
            Array.Copy(hash, 0, hashBytes, 16, 20);

            return Convert.ToBase64String(hashBytes);
        }
    }
}