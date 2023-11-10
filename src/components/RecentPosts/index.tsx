import { Card } from "@/components";

export default function RecentPosts() {
  return (
    <div className="mt-10">
      <div>
        <h3 className="text-center mb-5 md:text-left">Recent Posts</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card
          title="Making a design system from scratch"
          date="12 Feb 2020"
          subject="Design, Pattern"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Card
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          subject="Figma, Icon Design"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Card
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          subject="Figma, Icon Design"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <Card
          title="Creating pixel perfect icons in Figma"
          date="12 Feb 2020"
          subject="Figma, Icon Design"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
}
