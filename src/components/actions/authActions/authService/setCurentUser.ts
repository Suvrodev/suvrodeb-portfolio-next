export const setCurentUser = async (token: string) => {
  console.log("Token in set current user: ", token);

  try {
    const res = await fetch("/api/setToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      throw new Error("Failed to set token via API");
    }

    const data = await res.json();
    console.log("✅ Token set successfully:", data);
    return data;
  } catch (error) {
    console.error("❌ Error setting token:", error);
  }
};
