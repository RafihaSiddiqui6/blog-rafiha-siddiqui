import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";


interface Blog {
  image: string;
  author: string;
  title: string;
  description: string;
  date: string;
  id?: string;

}

interface initialState {
  blog: Blog[];

}

const initialState: initialState = {
  blog: [
    {
      image: "/image 1.jpg",
      author: "Rafiha Siddiqui",
      title: "The Power of Healthy Foods: Nourishing Your Body for a Better Life",
      description: `In today’s fast-paced world, maintaining a balanced diet is crucial for overall health and well-being. Healthy foods not only fuel your body but also help you maintain energy levels, improve mental clarity, and prevent chronic diseases. With so many food options available, it can be challenging to know where to start, but incorporating nutrient-dense foods into your daily routine can make a world of difference.

1. Fruits and Vegetables: The Foundation of a Healthy Diet

Fruits and vegetables are packed with vitamins, minerals, and antioxidants that help protect your body from illness. These natural powerhouses are low in calories and high in fiber, making them perfect for maintaining a healthy weight. For instance, berries, leafy greens, and citrus fruits are particularly rich in vitamins C and A, which are essential for immune function and skin health. Try to eat a variety of colorful fruits and veggies to ensure you're getting a broad spectrum of nutrients.

2. Whole Grains: A Source of Sustained Energy

Whole grains such as quinoa, brown rice, oats, and barley are excellent sources of complex carbohydrates, which provide your body with a steady supply of energy. Unlike refined grains, whole grains retain their fiber and essential nutrients, promoting good digestion and supporting heart health. They also help regulate blood sugar levels, preventing the energy crashes associated with sugary foods.

3. Lean Proteins: Building Blocks for Muscle and Recovery

Protein is essential for muscle growth, repair, and overall cell function. Choosing lean protein sources, such as chicken, turkey, fish, beans, lentils, and tofu, provides your body with the necessary amino acids without the extra saturated fats found in red meats. Incorporating protein into your meals can help you feel full longer, curb cravings, and support healthy weight management.

4. Healthy Fats: Nourishing Your Body from the Inside Out

Not all fats are created equal. Healthy fats, such as those found in avocados, nuts, seeds, and olive oil, are essential for maintaining cell function, hormone production, and brain health. Omega-3 fatty acids, in particular, are found in fatty fish like salmon and are known for their anti-inflammatory properties. Healthy fats can also help keep your skin glowing and your joints flexible.

5. Hydration: The Often Overlooked Essential

While food plays a significant role in health, hydration is just as important. Drinking plenty of water throughout the day helps regulate body temperature, aids digestion, and supports overall bodily functions. Herbal teas and water-rich foods like cucumbers and watermelon can also contribute to your hydration needs.

Conclusion: Eat for Wellness

Incorporating healthy foods into your diet doesn't have to be complicated. By focusing on a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats, you can nourish your body and enjoy long-term health benefits. Remember, small changes lead to big results, so start by making one healthy swap at a time. Your body will thank you for it, and you'll feel better than ever!`, 

date: "03/01/25 10:43",
      id: "0",
    },
    {
      image: "/image 2.jpg",
      author: "Rafiha siddiqui",
      title: "The Power of Meditation: Finding Peace and Clarity in a Busy World",
      description: `In the hustle and bustle of modern life, it’s easy to feel overwhelmed, stressed, or disconnected. With constant distractions and an endless to-do list, finding time to relax and recharge can seem impossible. This is where meditation comes in. As a simple yet powerful practice, meditation offers a pathway to inner peace, mental clarity, and overall well-being.

What Is Meditation?

Meditation is an ancient practice that involves focusing the mind to achieve a state of mental calmness and heightened awareness. While there are many forms of meditation, the central goal is to quiet the constant chatter of the mind and connect with the present moment. Whether you're sitting in stillness, practicing deep breathing, or visualizing peaceful imagery, meditation helps create a space for you to reflect, relax, and reset.

1. Reduces Stress and Anxiety

One of the most well-known benefits of meditation is its ability to reduce stress. By focusing on the present moment and practicing mindfulness, meditation helps shift your attention away from worries about the past or future. This shift reduces the body's production of stress hormones like cortisol, leading to a more relaxed and peaceful state. Regular meditation can help lower overall anxiety levels, making it easier to cope with life's challenges.

2. Enhances Mental Clarity and Focus

In today’s world, distractions are everywhere, making it hard to stay focused on important tasks. Meditation trains the brain to be more present and attentive. By practicing mindfulness and meditation techniques, you improve your ability to concentrate, think clearly, and make better decisions. Whether you're studying, working, or simply trying to be more present in your day-to-day life, meditation can sharpen your mental clarity.

3. Promotes Emotional Well-Being

Meditation helps regulate emotions by allowing you to observe your thoughts and feelings without judgment. This practice of mindfulness creates space for emotional healing, as it helps you gain a deeper understanding of your emotions and responses. Over time, meditation can help cultivate positive emotions such as compassion, gratitude, and joy, which contribute to a greater sense of happiness and fulfillment.

4. Improves Sleep Quality

A restless mind can make it difficult to fall asleep, but meditation can be a natural remedy for insomnia. By calming the nervous system and promoting relaxation, meditation prepares your body for sleep. Techniques like deep breathing, progressive muscle relaxation, or guided meditation can help ease you into a peaceful night's rest. Better sleep leads to better overall health, boosting your immune system and enhancing your mood.

5. Supports Physical Health

The benefits of meditation extend beyond the mind and emotions. Research has shown that meditation can have a positive impact on physical health as well. It has been linked to lower blood pressure, improved heart health, and a strengthened immune system. Meditation's ability to reduce stress and promote relaxation helps your body function at its best, improving both mental and physical well-being.

How to Get Started with Meditation

If you're new to meditation, don’t worry—getting started is simple! Here are a few tips to help you begin:

Start Small: Begin with just 5-10 minutes a day. As you get more comfortable, you can gradually extend your practice.
Find a Quiet Space: Choose a calm, quiet space where you won't be interrupted.
Focus on Your Breath: Close your eyes and bring your attention to your breathing. Breathe deeply and steadily, focusing on each inhale and exhale.
Be Patient: It’s normal for your mind to wander. Gently bring your focus back to your breath without judgment.
Try Guided Meditation: If you prefer structure, guided meditation apps or YouTube videos can help you through the process.
Conclusion: Embrace the Calm Within

Meditation is a powerful tool that can transform your life in profound ways. Whether you're seeking relief from stress, improved focus, or emotional balance, meditation offers a simple and effective solution. The key is consistency—regular practice, even for just a few minutes a day, can make a world of difference. In a world that’s constantly pulling you in many directions, meditation offers a much-needed pause, helping you reconnect with your inner peace and live a more centered, fulfilling life..`,

      date: "03/01/25 10:43",
      id: "1",
    },
    {
      image: "/image 5.jpg",
      author: "Rafiha siddiqui",
      title: "Chameleon Tea: Unlocking the Benefits of This Color-Changing Herbal Brew",
      description: `In the world of herbal teas, there's one drink that's catching everyone's attention not only for its striking, color-changing magic but also for its impressive health benefits. Chameleon tea, also known as butterfly pea flower tea, has been used for centuries in Southeast Asia for its vibrant hue and medicinal properties. The tea is made from the dried petals of the Clitoria ternatea plant, which, when steeped in hot water, changes color from blue to purple depending on the pH level.

But beyond its aesthetic appeal, chameleon tea has a variety of benefits that can enhance your health and well-being. Let's explore some of the key reasons why this tea should be a part of your wellness routine.

1. Rich in Antioxidants

Chameleon tea is packed with antioxidants, which help combat free radicals in the body. Free radicals can cause oxidative stress, contributing to aging and the development of chronic diseases. The butterfly pea flower contains anthocyanins—compounds responsible for the tea’s vibrant blue color—that are powerful antioxidants. By drinking chameleon tea, you can help protect your cells, reduce inflammation, and promote healthier skin.

2. Boosts Brain Function

One of the standout benefits of chameleon tea is its potential to improve brain health. Studies have shown that butterfly pea flower extract may help enhance cognitive function by increasing the production of acetylcholine, a neurotransmitter associated with memory and learning. Drinking chameleon tea regularly could improve focus, reduce brain fog, and even support long-term brain health, making it a great beverage for students and professionals alike.

3. Supports Healthy Skin and Hair

The antioxidants in chameleon tea don’t just benefit your internal health—they can also improve the condition of your skin and hair. The tea has anti-inflammatory and anti-aging properties that may help reduce the appearance of wrinkles, promote clearer skin, and even slow down the aging process. Additionally, it is believed that butterfly pea flower can stimulate hair growth, strengthen hair follicles, and prevent hair loss, making it a natural remedy for improving hair health.

4. Promotes Relaxation and Reduces Stress

Chameleon tea is known for its calming effects. It is believed to help reduce stress and anxiety, making it an excellent beverage for those seeking relaxation after a busy day. The compounds in the tea can have a mild sedative effect on the body, helping you unwind and promote better sleep. Drinking a cup of chameleon tea before bed may help you relax and fall into a peaceful slumber, thanks to its natural calming properties.

5. Supports Weight Loss

If you’re looking for a natural way to support your weight loss efforts, chameleon tea might be a helpful addition to your routine. Some studies suggest that the butterfly pea flower can help regulate metabolism and assist with fat burning. While more research is needed, drinking this tea in combination with a healthy diet and regular exercise could potentially aid in managing body weight.

6. Improves Digestion and Detoxifies the Body

Chameleon tea has mild detoxifying properties that help cleanse the body and support digestion. It can aid in flushing out toxins and improving gut health by soothing the digestive system. The tea also has mild diuretic effects, promoting urine production, which helps eliminate waste and keep the kidneys functioning properly.

7. Supports Immune Health

Butterfly pea flower tea is a great source of vitamin C, which plays a vital role in strengthening the immune system. Vitamin C is known for its ability to fight off infections and reduce the duration of illnesses. Regular consumption of chameleon tea can help keep your immune system strong and resilient against common colds and other infections.

How to Enjoy Chameleon Tea

Chameleon tea can be enjoyed in a variety of ways. Typically, it’s brewed by steeping the dried butterfly pea flower petals in hot water. You can add lemon juice to the tea to watch the color shift from blue to purple, thanks to the acidic nature of lemon. Additionally, sweeteners like honey or agave, and even herbs like mint, can be added for extra flavor.

If you’re feeling adventurous, you can experiment by using the tea in cocktails, smoothies, or even as a natural food dye for desserts.

Conclusion: A Colorful Boost for Your Health

Chameleon tea is more than just a fun drink that changes color—it’s a powerhouse of health benefits. From boosting brain function to supporting healthy skin, hair, and digestion, this herbal tea offers numerous advantages for your overall well-being. Whether you’re looking for a calming evening drink or a natural remedy for better health, incorporating chameleon tea into your routine is a delicious and nutritious choice.

So, the next time you’re in the mood for something unique and health-boosting, reach for a cup of chameleon tea and enjoy its many wonderful benefits!.`,

date: "03/01/25 10:43",
      id: "2",
    },
  ],

};

export const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action: PayloadAction<Blog>) => {
      state.blog.push({ ...action.payload, id: nanoid() });
    },
    removeBlog: (state, action: PayloadAction<{ id: string }>) => {
      state.blog = state.blog.filter((blog) => blog.id !== action.payload.id);
    },

  },
});

export const { addBlog,removeBlog,} = blogSlice.actions;
export default blogSlice.reducer;
