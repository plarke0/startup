export default function AboutSection({ title, content }) {
    return (
        <div className="d-flex flex-column mb-2">
            <span><b>{title}</b></span>
            <span>{content}</span>
        </div>
    );
}