interface WorkflowStep<Input = unknown, Output = unknown> {
  execute(done: (input: unknown) => Promise<void>, input?: Input): Promise<Output>;
}

export default WorkflowStep;
