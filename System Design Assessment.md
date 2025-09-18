# System Design Assessment

Hi, there is no coding aspect for the system design assessment. The interviewer will share with you a problem.
You will be asked to design a system that solves the problem.

For demonstration purposes, we would like you to sketch it out/write it on an online whiteboarding tool.
You can use any tool you are comfortable with. Here are some suggestions:

- [Excalidraw](https://excalidraw.com/)
- [Tldraw](https://www.tldraw.com/)

You can use other tools as long as they allow you to freely share the link with the interviewer. But we think the simpler tools above help you focus on the design rather than the tool itself.

### Tips

1. **Clarify the requirements**: Make sure you understand the requirements before you start designing the system. Ask questions if you are unsure about the requirements.
2. **Start with the high-level design**: Start with the high-level design and then drill down to the details.
3. **Focus on scalability**: Make sure your system is scalable. Think about how it will handle a large number of users or a large amount of data.
4. **Openly ask and discuss trade-offs**: Discuss trade-offs with the interviewer. There is no one-size-fits-all solution, and it's important to understand the trade-offs of different design decisions.

Question:
Background: Course Registration Systems are an interesting challenge for universities to solve. Recently UBC moved away fron their in-house solution to Workday. Reception has been mixed to say the least. The system is slow, clunky, and not user-friendly. To go with the theme, we would like you to design a Course Registration System.

Problem: Design a Course Registration System.

The system should allow students to register for courses, view the courses they are registered for, and drop courses.
The system should allow instructors to create courses, modify courses, and view the students registered for their courses and cancel courses.
The system should be able to handle a large number of students and courses. Some time-sensitive operations like registration and dropping courses should be fast and atomic.
Ideally we should be able to handle waitlists for courses.and notify students when they are off the waitlist.
